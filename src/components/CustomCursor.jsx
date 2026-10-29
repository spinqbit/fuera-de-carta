import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 })
  const labelRef = useRef('')
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mq.matches) return
    setEnabled(true)
    document.documentElement.classList.add('custom-cursor')

    const updateLabelState = (nextActive, nextLabel) => {
      setActive(nextActive)
      setLabel(nextLabel)
    }

    const onMove = (e) => {
      pos.current.tx = e.clientX
      pos.current.ty = e.clientY

      const magneticEls = document.querySelectorAll('[data-magnetic]')
      magneticEls.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const distance = Math.hypot(dx, dy)
        const range = 120
        if (distance < range && distance > 0) {
          const pull = ((range - distance) / range) * 14
          el.style.translate = `${(dx / distance) * pull}px ${(dy / distance) * pull}px`
        } else {
          el.style.translate = ''
        }
      })

      const hovered = document.elementFromPoint(e.clientX, e.clientY)
      const interactive = hovered?.closest('a, button, input, select, textarea, [data-cursor]')
      if (interactive) {
        const nextLabel = interactive.getAttribute('data-cursor') || ''
        if (!active || labelRef.current !== nextLabel) {
          labelRef.current = nextLabel
          updateLabelState(true, nextLabel)
        }
      } else {
        if (active || labelRef.current) {
          labelRef.current = ''
          updateLabelState(false, '')
        }
      }
    }

    const onLeave = () => {
      document.querySelectorAll('[data-magnetic]').forEach((el) => {
        el.style.translate = ''
      })
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    let rafId
    const raf = () => {
      pos.current.x += (pos.current.tx - pos.current.x) * 0.18
      pos.current.y += (pos.current.ty - pos.current.y) * 0.18
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
      document.documentElement.classList.remove('custom-cursor')
    }
  }, [active])

  if (!enabled) return null

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ mixBlendMode: 'difference' }}
    >
      <div
        className={`cursor-dot ${active ? 'cursor-dot-active' : ''}`}
      />
      {active && label && (
        <span className="cursor-label">{label}</span>
      )}
    </div>
  )
}

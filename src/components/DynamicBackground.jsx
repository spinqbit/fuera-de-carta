import React, { useEffect, useState } from 'react'

const fondos = [
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1920&q=80',
]

export default function DynamicBackground() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-bg]')).sort(
      (a, b) => a.offsetTop - b.offsetTop
    )

    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.42
      let next = 0
      targets.forEach((el) => {
        if (marker >= el.offsetTop) {
          next = Number(el.dataset.bg) || 0
        }
      })
      setActive((prev) => (prev === next ? prev : next))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black" aria-hidden="true">
      {fondos.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={index === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 object-cover w-full h-full filter blur-[2px] scale-105 transition-opacity duration-1000 ${
            index === active ? 'opacity-75' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay negro general reducido para que la foto respire */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Viñeta cinematográfica: centro transparente, bordes oscuros */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/2 via-black/50 to-black/90" />
    </div>
  )
}

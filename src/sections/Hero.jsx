import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      id="manifiesto"
      data-bg="0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B]/75 border-b border-[#252525] pt-20"
    >
      {/* Iluminación ambiental muy sutil: carbón/cálido, profundidad sin saturar */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,90,0,0.07), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 110%, rgba(37,37,37,0.6), transparent 70%)',
        }}
      />
      {/* Trama fina de acero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #8A8A8A 1px, transparent 1px), linear-gradient(to bottom, #8A8A8A 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold tracking-[0.3em] text-[#8A8A8A] uppercase mb-8">
          Fuera de Carta / 1ONE CHEF
        </motion.p>

        {/* Título principal de impacto */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="font-anton text-5xl sm:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.88] tracking-normal uppercase text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          <span className="block overflow-hidden">
            <motion.span className="block" initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
              HAY TALENTO QUE
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block" initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}>
              TODAVÍA NO ESTÁS
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block text-white" initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}>
              VIENDO.
            </motion.span>
          </span>
        </motion.h1>

        {/* Tarjeta central de manifiesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#000000]/95 border border-[#252525] p-8 sm:p-12 max-w-3xl mx-auto mt-12 text-center rounded-none">
          <p className="font-playfair text-xl sm:text-2xl text-white leading-relaxed mb-4">
            Y POR ESO NACE FUERA DE CARTA.
          </p>
          <p className="font-playfair text-base sm:text-lg text-[#8A8A8A] leading-relaxed italic">
            Un espacio de visibilidad, herramientas de gestión real y comunidad para
            quienes hacen gastronomía de verdad.
          </p>
        </motion.div>

        {/* CTA principal */}
        <div className="mt-10">
          <motion.a
            href="#explorar"
            data-cursor="EXPLORAR"
            data-magnetic
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-10 py-4 bg-[#FF5A00] hover:bg-[#e04f00] text-white font-anton text-base md:text-lg tracking-wider transition-all duration-200 uppercase rounded-none hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,90,0,0.38)] active:translate-y-0"
          >
            Explorar Plataforma
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

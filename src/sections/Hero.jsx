import React from 'react'

export default function Hero() {
  return (
    <section
      id="manifiesto"
      data-bg="0"
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
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8A8A8A] uppercase mb-8">
          Fuera de Carta / 1ONE CHEF
        </p>

        {/* Título principal de impacto */}
        <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.88] tracking-normal uppercase text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          HAY TALENTO QUE
          <br />
          TODAVÍA NO ESTÁS
          <br />
          <span className="text-white">VIENDO.</span>
        </h1>

        {/* Tarjeta central de manifiesto */}
        <div className="bg-[#000000]/95 border border-[#252525] p-8 sm:p-12 max-w-3xl mx-auto mt-12 text-center rounded-none">
          <p className="font-playfair text-xl sm:text-2xl text-white leading-relaxed mb-4">
            Y POR ESO NACE FUERA DE CARTA.
          </p>
          <p className="font-playfair text-base sm:text-lg text-[#8A8A8A] leading-relaxed italic">
            Un espacio de visibilidad, herramientas de gestión real y comunidad para
            quienes hacen gastronomía de verdad.
          </p>
        </div>

        {/* CTA principal */}
        <div className="mt-10">
          <a
            href="#explorar"
            className="inline-block px-10 py-4 bg-[#FF5A00] hover:bg-[#e04f00] text-white font-anton text-base md:text-lg tracking-wider transition-colors duration-150 uppercase rounded-none"
          >
            Explorar Plataforma
          </a>
        </div>
      </div>
    </section>
  )
}

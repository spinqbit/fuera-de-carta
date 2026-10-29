import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0B0B]/95 border-b border-[#252525]">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between gap-6">
        {/* Branding industrial */}
        <a href="#top" className="flex items-center gap-3 select-none">
          <div className="relative w-9 h-9 bg-black border border-[#8A8A8A] flex items-center justify-center font-anton text-white text-sm tracking-wider">
            FDC
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#FF5A00]" />
          </div>
          <span className="font-bold text-xs md:text-sm tracking-[0.25em] text-white uppercase whitespace-nowrap">
            FUERA DE CARTA{' '}
            <span className="text-[#8A8A8A] font-normal">|</span>{' '}
            <span className="text-[#FF5A00] font-bold">1</span>ONE CHEF
          </span>
        </a>

        {/* Navegación principal */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-[#8A8A8A]">
          <a href="#manifiesto" className="hover:text-white transition-colors duration-150">
            Manifiesto
          </a>
          <a href="#oficio" className="hover:text-white transition-colors duration-150">
            Oficio
          </a>
          <a href="#herramientas" className="hover:text-white transition-colors duration-150">
            Herramientas
          </a>
        </nav>

        {/* Acceso directo */}
        <a
          href="#acceso"
          className="px-5 py-2.5 bg-transparent border border-[#8A8A8A] hover:border-white hover:text-white text-white font-anton tracking-wider text-xs md:text-sm transition-colors duration-150 uppercase rounded-none"
        >
          Acceso
        </a>
      </div>
    </header>
  )
}

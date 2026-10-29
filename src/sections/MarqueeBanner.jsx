import React from 'react'

const frases = [
  'Fuera de Carta',
  'Escandallo & Costos',
  'Cocina de Oficio',
  'Visibilidad Real',
  'Duelos en Vivo',
  'Margen Neto',
  'Gestión de Insumos',
  'Comunidad de Chefs',
  'Trabajo Duro',
  'Libertad Creativa',
]

export default function MarqueeBanner() {
  return (
    <section
      data-bg="1"
      className="relative border-y border-[#252525] bg-[#0B0B0B]/70 py-4 md:py-6 overflow-hidden"
      aria-label="Manifiesto en movimiento"
    >
      <div className="flex w-max animate-marquee will-change-transform">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center shrink-0">
            {frases.map((frase, index) => (
              <span
                key={`${copy}-${index}`}
                className="font-anton text-3xl md:text-5xl lg:text-6xl uppercase tracking-wide text-white/30 whitespace-nowrap px-6 md:px-10"
              >
                {frase}
                <span className="inline-block mx-6 md:mx-10 text-[#8A8A8A] align-middle">
                  //
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

import React from 'react'

const tools = [
  {
    id: 'escandallo',
    numero: '01',
    titulo: 'Calculadora de Escandallo',
    descripcion: 'Costo real por plato. Desglose de insumos, mermas y rendimiento. Precisión quirúrgica para tu carta.',
    icono: '⚖',
    enlace: '#escandallo'
  },
  {
    id: 'margen',
    numero: '02',
    titulo: 'Margen de Ganancia',
    descripcion: 'Define tu precio objetivo y calcula el margen neto por plato. Controla la rentabilidad en tiempo real.',
    icono: '📊',
    enlace: '#margen'
  },
  {
    id: 'insumos',
    numero: '03',
    titulo: 'Gestión de Insumos',
    descripcion: 'Inventario vivo, proveedores, alertas de stock y histórico de compras. La despensa bajo control.',
    icono: '📦',
    enlace: '#insumos'
  },
  {
    id: 'duelos',
    numero: '04',
    titulo: 'Duelos Culinarios',
    descripcion: 'Enfrentamientos en vivo. Jurado técnico, voto del público, streaming. La competencia como espectáculo.',
    icono: '⚔',
    enlace: '#duelos'
  }
]

export default function Tools() {
  return (
    <section id="herramientas" className="bg-[#0B0B0B] py-16 px-4 border-y border-[#252525]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header de Sección */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] text-[#8A8A8A] uppercase mb-3">
            Herramientas de Oficio
          </p>
          <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl tracking-normal leading-none text-white">
            CONTROL ABSOLUTO DE TU NEGOCIO
          </h2>
        </div>

        {/* Grid de Herramientas - 2 columnas en desktop, 1 en mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <article
              key={tool.id}
              className="group relative bg-[#0B0B0B] border border-[#252525] p-8 hover:border-[#8A8A8A] transition-colors duration-300"
            >
              {/* Número + Ícono */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-anton text-4xl text-[#8A8A8A] leading-none">
                  {tool.numero}
                </span>
                <span className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                  {tool.icono}
                </span>
              </div>

              {/* Título */}
              <h3 className="font-anton text-xl tracking-normal text-white mb-3 group-hover:text-[#8A8A8A] transition-colors duration-300">
                {tool.titulo}
              </h3>

              {/* Descripción */}
              <p className="font-playfair text-base text-[#8A8A8A] leading-relaxed italic mb-6">
                {tool.descripcion}
              </p>

              {/* Enlace de acción */}
              <a
                href={tool.enlace}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#8A8A8A] hover:text-white transition-colors duration-150"
              >
                Acceder
                <span className="w-8 h-px bg-current transform group-hover:scale-150 transition-transform origin-left"></span>
              </a>
            </article>
          ))}
        </div>

        {/* Línea divisoria metálica */}
        <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-[#252525] to-transparent" />

        {/* CTA Inferior */}
        <div className="mt-16 text-center">
          <p className="font-playfair text-lg text-[#8A8A8A] leading-relaxed italic mb-6 max-w-2xl mx-auto">
            "No se gestiona lo que no se mide. El escandallo no es burocracia, es libertad creativa."
          </p>
          <a
            href="#demo"
            className="inline-block px-10 py-4 bg-transparent border-2 border-[#8A8A8A] text-[#8A8A8A] font-anton text-lg tracking-wider hover:border-white hover:text-white transition-all duration-150 uppercase"
          >
            Solicitar Demo
          </a>
        </div>

      </div>
    </section>
  )
}
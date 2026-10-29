import React from 'react'

const items = [
  {
    id: 'manifiesto-01',
    bg: 'bg-black/80',
    eyebrow: '01 / Manifiesto',
    title: 'La gente talentosa no huye del trabajo duro.',
    body: 'Quiere un lugar donde el oficio pese más que el personaje.',
    meta: 'Manifiesto',
  },
  {
    id: 'reel-oficio',
    bg: 'bg-[#141414]/80',
    eyebrow: 'Reel / 04:12',
    title: 'Cocina de Oficio',
    body: 'Servicio real. Fuego real. Manos que miden antes de decorar.',
    meta: 'Documental',
  },
  {
    id: 'comunidad-02',
    bg: 'bg-black/80',
    eyebrow: '02 / Comunidad',
    title: 'Visibilidad real para quienes están detrás del servicio.',
    body: 'No solo el plato final: el proceso, el equipo, el oficio.',
    meta: 'Comunidad',
  },
  {
    id: 'escandallo',
    bg: 'bg-[#141414]/80',
    eyebrow: 'Herramienta 01',
    title: 'Escandallo & Costos',
    body: 'Costo real por plato. Desglose de insumos, mermas y rendimiento.',
    meta: 'Costos',
  },
  {
    id: 'margen',
    bg: 'bg-black/80',
    eyebrow: 'Herramienta 02',
    title: 'Cálculo de Márgenes en Tiempo Real',
    body: 'Define el precio objetivo y controla la rentabilidad plato por plato.',
    meta: 'Margen',
  },
  {
    id: 'insumos',
    bg: 'bg-[#141414]/80',
    eyebrow: 'Herramienta 03',
    title: 'Gestión de Insumos',
    body: 'Inventario vivo, proveedores, alertas de stock, histórico de compras.',
    meta: 'Insumos',
  },
  {
    id: 'duelos',
    bg: 'bg-black/80',
    eyebrow: 'Comunidad / Live',
    title: 'Duelos en Vivo',
    body: 'Enfrentamientos técnicos con jurado y voto del público.',
    meta: 'Streaming',
  },
  {
    id: 'recetario',
    bg: 'bg-[#141414]/80',
    eyebrow: 'Oficio',
    title: 'Recetario Documentado',
    body: 'Procesos, mise en place y estándares que sobreviven al turno.',
    meta: 'Técnica',
  },
  {
    id: 'manifiesto-03',
    bg: 'bg-black/80',
    eyebrow: '03 / Manifiesto',
    title: 'El escandallo no es burocracia: es libertad creativa.',
    body: 'No se gestiona lo que no se mide.',
    meta: 'Cultura',
  },
]

export default function GridFeed() {
  return (
    <section id="oficio" data-bg="2" className="bg-[#0B0B0B]/70 py-12 md:py-20 px-4 border-b border-[#252525]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#8A8A8A] uppercase mb-2">
              Mosaico de Oficio
            </p>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase text-white leading-none">
              El Trabajo Detrás Del Servicio
            </h2>
          </div>
          <span className="hidden md:block text-xs font-mono text-[#252525] uppercase tracking-widest">
            09 módulos
          </span>
        </div>

        {/* Mosaico industrial: 3 columnas, gap de 1px, fondo acero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#252525] rounded-none">
          {items.map((item) => (
            <article
              key={item.id}
              className={`${item.bg} p-6 md:p-8 min-h-[220px] md:min-h-[260px] flex flex-col justify-between border border-transparent hover:border-[#FF5A00] transition-none cursor-default`}
            >
              <div>
                <span className="block text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-6">
                  {item.eyebrow}
                </span>
                <h3 className="font-anton text-xl md:text-2xl uppercase text-white leading-tight mb-4">
                  {item.title}
                </h3>
                <p className="font-playfair italic text-sm md:text-base text-[#8A8A8A] leading-relaxed">
                  {item.body}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#252525] flex items-center justify-between">
                <span className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest">
                  {item.meta}
                </span>
                <span className="w-8 h-px bg-[#8A8A8A]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    id: 'manifiesto-01',
    eyebrow: '01 / Manifiesto',
    title: 'La gente talentosa no huye del trabajo duro.',
    body: 'Quiere un lugar donde el oficio pese más que el personaje.',
    meta: 'Manifiesto',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cocina-oficio',
    eyebrow: 'Reel / Documental',
    title: 'Cocina de Oficio',
    body: 'Servicio real. Fuego real. Manos que miden antes de decorar.',
    meta: 'Documental',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'comunidad-02',
    eyebrow: '02 / Comunidad',
    title: 'Visibilidad real para quienes están detrás del servicio.',
    body: 'No solo el plato final: el proceso, el equipo, el oficio.',
    meta: 'Comunidad',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'escandallo',
    eyebrow: 'Herramienta 01',
    title: 'Escandallo & Costos',
    body: 'Costo real por plato. Desglose de insumos, mermas y rendimiento.',
    meta: 'Costos',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'margen',
    eyebrow: 'Herramienta 02',
    title: 'Cálculo de Márgenes en Tiempo Real',
    body: 'Define el precio objetivo y controla la rentabilidad plato por plato.',
    meta: 'Margen',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'insumos',
    eyebrow: 'Herramienta 03',
    title: 'Gestión de Insumos',
    body: 'Inventario vivo, proveedores, alertas de stock, histórico de compras.',
    meta: 'Insumos',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'duelos',
    eyebrow: 'Comunidad / Live',
    title: 'Duelos en Vivo',
    body: 'Enfrentamientos técnicos con jurado y voto del público.',
    meta: 'Streaming',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'recetario',
    eyebrow: 'Oficio',
    title: 'Recetario Documentado',
    body: 'Procesos, mise en place y estándares que sobreviven al turno.',
    meta: 'Técnica',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'manifiesto-03',
    eyebrow: '03 / Manifiesto',
    title: 'El escandallo no es burocracia: es libertad creativa.',
    body: 'No se gestiona lo que no se mide.',
    meta: 'Cultura',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
}

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function GridFeed() {
  return (
    <motion.section
      id="oficio"
      data-bg="2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#0B0B0B]/70 py-12 md:py-20 px-4 border-b border-[#252525]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-8 gap-4"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#8A8A8A] uppercase mb-2">
              Mosaico de Oficio
            </p>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase text-white leading-none overflow-hidden">
              <motion.span className="block" initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                El Trabajo Detrás Del Servicio
              </motion.span>
            </h2>
          </div>
          <span className="hidden md:block text-xs font-mono text-[#252525] uppercase tracking-widest">
            09 módulos
          </span>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#252525] rounded-none"
        >
          {items.map((item, index) => {
            return (
            <motion.article
              key={item.id}
              data-cursor="EXPLORAR"
              variants={itemVariant}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="group relative flex flex-col min-h-[260px] border border-transparent hover:border-[#FF5A00] transition-colors duration-0 cursor-default overflow-hidden"
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/55" />

              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between gap-6 flex-1">
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
                <div className="pt-4 border-t border-[#252525] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest">
                    {item.meta}
                  </span>
                  <span className="w-8 h-px bg-[#8A8A8A] group-hover:w-14 group-hover:bg-[#FF5A00] transition-all duration-200" />
                </div>
              </div>
            </motion.article>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

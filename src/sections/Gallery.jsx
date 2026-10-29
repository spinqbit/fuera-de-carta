import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const categorias = ['Todos', 'Entradas', 'Principales', 'Postres', 'Coctelería']

const platos = [
  {
    id: 'principal-1',
    categoria: 'Principales',
    titulo: 'Fuego y Carne',
    descripcion: 'Corte madurado, sellado a la brasa y glaseado de su propio jugo. Servicio directo, sin vueltas.',
    detalle: 'Técnica: brasa viva. Maridaje: Malbec reserva.',
    imagen: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    imagenAlta: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85',
  },
  {
    id: 'principal-2',
    categoria: 'Principales',
    titulo: 'Brasa de Autor',
    descripcion: 'Proteína principal con corte rústico y terminación al carbón. Plato de oficio, no de escenario.',
    detalle: 'Técnica: fuego directo. Maridaje: Cabernet Sauvignon.',
    imagen: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
    imagenAlta: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1920&q=85',
  },
  {
    id: 'entrada',
    categoria: 'Entradas',
    titulo: 'Producto y Huerta',
    descripcion: 'Entrada de estación con texturas frescas y aceite de oliva en frío.',
    detalle: 'Técnica: emplatado frío. Maridaje: Sauvignon Blanc.',
    imagen: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    imagenAlta: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1920&q=85',
  },
  {
    id: 'postre',
    categoria: 'Postres',
    titulo: 'Dulzor Técnico',
    descripcion: 'Postre de cierre con equilibrio entre amargo, dulce y textura crujiente.',
    detalle: 'Técnica: baño maría. Maridaje: vino de licor.',
    imagen: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80',
    imagenAlta: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1920&q=85',
    objectPosition: 'center 35%',
  },
  {
    id: 'cocteleria',
    categoria: 'Coctelería',
    titulo: 'Barra en Servicio',
    descripcion: 'Coctelería clásica con mise en place medida y servicio en copa fría.',
    detalle: 'Técnica: stirring. Maridaje: aperitivo seco.',
    imagen: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    imagenAlta: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=85',
  },
  {
    id: 'sobremesa',
    categoria: 'Coctelería',
    titulo: 'Sobremesa & Espirituosos',
    descripcion: 'Cierre de servicio con destilados y sobremesa en mesa de oficio.',
    detalle: 'Técnica: service en copa. Maridaje: digestivo.',
    imagen: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    imagenAlta: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1920&q=85',
    objectPosition: 'center 40%',
  },
]

export default function Gallery() {
  const [categoria, setCategoria] = useState('Todos')
  const [seleccionado, setSeleccionado] = useState(null)

  const filtrados =
    categoria === 'Todos' ? platos : platos.filter((p) => p.categoria === categoria)

  useEffect(() => {
    if (!seleccionado) return
    const onKey = (e) => {
      if (e.key === 'Escape') setSeleccionado(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [seleccionado])

  return (
    <motion.section
      id="galeria"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#0B0B0B]/75 py-16 md:py-24 px-4 border-b border-[#252525]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#8A8A8A] uppercase mb-2">
              Galería de Experiencia
            </p>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase text-white leading-none overflow-hidden">
              <motion.span className="block" initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                Platos y Servicio
              </motion.span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setCategoria(c)}
                className={`px-4 py-2 border text-xs font-semibold uppercase tracking-widest transition-colors duration-200 rounded-none ${
                  categoria === c
                    ? 'border-[#8A8A8A] text-white bg-black/40'
                    : 'border-[#252525] text-[#8A8A8A] hover:border-[#8A8A8A] hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#252525]">
          <AnimatePresence mode="popLayout">
            {filtrados.map((plato) => (
              <motion.article
                key={plato.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                data-cursor="AMPLIAR"
                className="group relative min-h-[280px] overflow-hidden bg-black cursor-pointer border border-transparent hover:border-[#252525]"
                onClick={() => setSeleccionado(plato)}
              >
                <img
                  src={plato.imagen}
                  alt={plato.titulo}
                  loading="lazy"
                  style={{ objectPosition: plato.objectPosition || 'center' }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />

                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <span className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-2">
                    {plato.categoria}
                  </span>
                  <h3 className="font-anton text-2xl uppercase text-white leading-tight">
                    {plato.titulo}
                  </h3>
                  <p className="font-playfair italic text-sm text-[#8A8A8A] leading-relaxed mt-2 line-clamp-2">
                    {plato.descripcion}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {seleccionado && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSeleccionado(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl bg-[#0B0B0B] border border-[#252525] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSeleccionado(null)}
                className="absolute top-4 right-4 z-20 px-3 py-1.5 border border-[#252525] bg-black/70 text-white text-xs uppercase tracking-widest hover:border-[#8A8A8A]"
              >
                Cerrar
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative min-h-[300px] md:min-h-[520px] overflow-hidden">
                  <img
                    src={seleccionado.imagenAlta}
                    alt={seleccionado.titulo}
                    style={{ objectPosition: seleccionado.objectPosition || 'center' }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-4">
                    {seleccionado.categoria}
                  </span>
                  <h3 className="font-anton text-3xl md:text-5xl uppercase text-white leading-none mb-6">
                    {seleccionado.titulo}
                  </h3>
                  <p className="font-playfair text-base md:text-lg text-white leading-relaxed italic mb-6">
                    {seleccionado.descripcion}
                  </p>
                  <div className="border-t border-[#252525] pt-6">
                    <p className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest">
                      {seleccionado.detalle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

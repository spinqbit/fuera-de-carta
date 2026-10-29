import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const zonas = [
  {
    id: 'guemes',
    label: 'Güemes',
    locales: [
      {
        id: 'standard-69',
        nombre: 'Güemes - Standard 69',
        concepto: 'Cocina de autor y barra industrial. Pulso nocturno, fuego y técnica.',
        direccion: 'Güemes, Córdoba Capital',
        imagen: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'el-papagayo',
        nombre: 'Güemes - El Papagayo',
        concepto: 'Vanguardia y arquitectura de autor. Experiencia gastronómica de alto nivel.',
        direccion: 'Güemes, Córdoba Capital',
        imagen: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    id: 'nueva-cordoba',
    label: 'Nueva Córdoba',
    locales: [
      {
        id: 'nueva-bistro',
        nombre: 'Nueva Córdoba - Bistró Urbano',
        concepto: 'Bistró contemporáneo con ritmo de ciudad y carta técnica.',
        direccion: 'Nueva Córdoba, Córdoba Capital',
        imagen: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'nueva-rooftop',
        nombre: 'Nueva Córdoba - Rooftop Bar & Kitchen',
        concepto: 'Barra, terraza y cocina de vanguardia en altura.',
        direccion: 'Nueva Córdoba, Córdoba Capital',
        imagen: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    id: 'zona-norte',
    label: 'Zona Norte / Cerro',
    locales: [
      {
        id: 'villa-belgrano',
        nombre: 'Villa Belgrano - República Restaurant',
        concepto: 'Recta Martinolli. Cocina de autor con identidad cordobesa y servicio de sala.',
        direccion: 'Villa Belgrano, Córdoba Capital',
        imagen: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'cerro-casona',
        nombre: 'Cerro de las Rosas - Casona & Jardín Culinario',
        concepto: 'Casona, jardín y menú de estación con huerta propia.',
        direccion: 'Cerro de las Rosas, Córdoba Capital',
        imagen: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
]

const estadoOperativo = {
  'standard-69': {
    estado: 'SERVICIO ACTIVO',
    disponibilidad: 'Últimas 3 mesas para el turno noche',
    concepto: 'Cocina de autor y tapeo industrial',
    destacado: 'Maridaje sugerido de 5 pasos',
    pulso: 'green',
  },
  'el-papagayo': {
    estado: 'EXCLUSIVO CON RESERVA',
    disponibilidad: 'Cupos limitados para esta semana',
    concepto: 'Menú degustación de 11 pasos',
    destacado: 'Arquitectura de autor única',
    pulso: 'amber',
  },
  'nueva-bistro': {
    estado: 'TURNO NOCHE ABIERTO',
    disponibilidad: 'Alta disponibilidad / Confirmación inmediata',
    concepto: 'Cocina de estación y terraza urbana',
    destacado: 'Atención fluida y carta de vinos local',
    pulso: 'green',
  },
  'nueva-rooftop': {
    estado: 'BARRA Y COCTELERÍA EN VIVO',
    disponibilidad: 'Terraza con reserva / Barra por orden de llegada',
    concepto: 'Coctelería de autor y DJ set',
    destacado: 'Cocina abierta hasta la 01:30 AM',
    pulso: 'amber',
  },
  'villa-belgrano': {
    estado: 'EXPERIENCIA DE PRODUCTO',
    disponibilidad: 'Reservas anticipadas sugeridas',
    concepto: 'Cocina de producto, cava de guarda y fuegos',
    destacado: 'Salón privado y parking exclusivo',
    pulso: 'amber',
  },
  'cerro-casona': {
    estado: 'FUEGOS ENCENDIDOS',
    disponibilidad: 'Mesas en jardín y galería exterior',
    concepto: 'Cortes madurados y vegetales al rescoldo',
    destacado: 'Espacio verde y ambiente calefaccionado',
    pulso: 'green',
  },
}

export default function Reservations() {
  const [zonaActiva, setZonaActiva] = useState(zonas[0].id)
  const [selectedId, setSelectedId] = useState(zonas[0].locales[0].id)
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    fecha: '',
    hora: '',
    personas: '2',
    notas: '',
  })

  const zona = zonas.find((z) => z.id === zonaActiva)
  const local = zonas.flatMap((z) => z.locales).find((l) => l.id === selectedId)

  const seleccionarZona = (id) => {
    const nextZona = zonas.find((z) => z.id === id)
    setZonaActiva(id)
    if (nextZona?.locales?.length) {
      setSelectedId(nextZona.locales[0].id)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <motion.section
      id="reservas"
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
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.3em] text-[#8A8A8A] uppercase mb-2">
            Reservas y Sucursales
          </p>
          <h2 className="font-anton text-3xl sm:text-5xl uppercase text-white leading-none overflow-hidden">
            <motion.span className="block" initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              Elegí el Local y Reservá
            </motion.span>
          </h2>
          <p className="font-playfair italic text-[#8A8A8A] mt-4 max-w-2xl">
            Seleccioná la zona, compará las opciones disponibles y la reserva queda asignada automáticamente.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8">
          {zonas.map((z) => (
            <button
              key={z.id}
              onClick={() => seleccionarZona(z.id)}
              className={`px-4 py-2 border text-xs uppercase tracking-widest transition-colors duration-200 rounded-none ${
                zonaActiva === z.id
                  ? 'border-[#8A8A8A] text-white bg-black/40'
                  : 'border-[#252525] text-[#8A8A8A] hover:border-[#8A8A8A] hover:text-white'
              }`}
            >
              {z.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#252525] mb-12">
          {zona.locales.map((loc) => (
            <button
              key={loc.id}
              data-cursor="RESERVAR"
              onClick={() => setSelectedId(loc.id)}
              className={`group relative text-left overflow-hidden border transition-colors duration-150 ${
                selectedId === loc.id
                  ? 'border-[#FF5A00]'
                  : 'border-transparent hover:border-[#8A8A8A]'
              }`}
            >
              <div className="relative min-h-[240px]">
                <img
                  src={loc.imagen}
                  alt={loc.nombre}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <span className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-2">
                    {loc.direccion}
                  </span>
                  <h3 className="font-anton text-xl md:text-2xl uppercase text-white leading-tight mb-2">
                    {loc.nombre}
                  </h3>
                  <p className="font-playfair italic text-sm text-[#8A8A8A] leading-relaxed">
                    {loc.concepto}
                  </p>
                  {selectedId === loc.id && (
                    <span className="mt-4 text-xs font-mono text-[#FF5A00] uppercase tracking-widest">
                      Seleccionado para reserva
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#252525] mb-12"
          >
            <div className="bg-[#0B0B0B]/80 p-6 min-h-[150px] flex flex-col justify-between">
              <p className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-4">
                Estado en Vivo
              </p>
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${estadoOperativo[selectedId]?.pulso === 'green' ? 'bg-green-500' : 'bg-amber-500'}`} />
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${estadoOperativo[selectedId]?.pulso === 'green' ? 'bg-green-500' : 'bg-amber-500'}`} />
                </span>
                <span className="font-mono text-sm uppercase tracking-widest text-white">
                  {estadoOperativo[selectedId]?.estado}
                </span>
              </div>
            </div>

            <div className="bg-[#0B0B0B]/80 p-6 min-h-[150px] flex flex-col justify-between">
              <p className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-4">
                Disponibilidad
              </p>
              <p className="font-playfair italic text-white leading-relaxed">
                {estadoOperativo[selectedId]?.disponibilidad}
              </p>
            </div>

            <div className="bg-[#0B0B0B]/80 p-6 min-h-[150px] flex flex-col justify-between">
              <p className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-4">
                Experiencia
              </p>
              <p className="font-anton text-lg uppercase text-white leading-tight mb-2">
                {estadoOperativo[selectedId]?.concepto}
              </p>
              <p className="font-mono text-xs text-[#8A8A8A] uppercase tracking-widest">
                {estadoOperativo[selectedId]?.destacado}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#0B0B0B]/80 border border-[#252525] p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="md:col-span-2 border border-[#252525] bg-black/40 p-4">
            <p className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-1">
              Local seleccionado
            </p>
            <p className="font-anton text-xl uppercase text-white">{local?.nombre}</p>
            <p className="font-playfair italic text-[#8A8A8A] text-sm mt-1">{local?.direccion}</p>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-2">
              Nombre
            </label>
            <input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full bg-black/60 border border-[#252525] px-4 py-3 text-white font-sans focus:outline-none focus:border-[#8A8A8A]"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-black/60 border border-[#252525] px-4 py-3 text-white font-sans focus:outline-none focus:border-[#8A8A8A]"
              placeholder="email@dominio.com"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-2">
              Fecha
            </label>
            <input
              type="date"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              className="w-full bg-black/60 border border-[#252525] px-4 py-3 text-white font-sans focus:outline-none focus:border-[#8A8A8A]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-2">
              Hora
            </label>
            <input
              type="time"
              name="hora"
              value={form.hora}
              onChange={handleChange}
              className="w-full bg-black/60 border border-[#252525] px-4 py-3 text-white font-sans focus:outline-none focus:border-[#8A8A8A]"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-2">
              Personas
            </label>
            <select
              name="personas"
              value={form.personas}
              onChange={handleChange}
              className="w-full bg-black/60 border border-[#252525] px-4 py-3 text-white font-sans focus:outline-none focus:border-[#8A8A8A]"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8+</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-2">
              Notas
            </label>
            <input
              name="notas"
              value={form.notas}
              onChange={handleChange}
              className="w-full bg-black/60 border border-[#252525] px-4 py-3 text-white font-sans focus:outline-none focus:border-[#8A8A8A]"
              placeholder="Alergias, celebración, etc."
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              data-cursor="RESERVAR"
              data-magnetic
              className="px-8 py-4 bg-[#FF5A00] hover:bg-[#e04f00] text-white font-anton text-base uppercase tracking-wider transition-colors duration-200 rounded-none hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,90,0,0.38)]"
            >
              Confirmar Reserva
            </button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  )
}

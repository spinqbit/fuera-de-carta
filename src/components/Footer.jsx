import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      data-bg="3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#0B0B0B]/85 border-t border-[#252525] py-14 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Columna 1: Branding */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-black border border-[#8A8A8A] flex items-center justify-center font-anton text-white text-sm tracking-wider">
                FDC
              </div>
              <span className="font-bold text-xs tracking-[0.22em] text-white uppercase">
                FUERA DE CARTA{' '}
                <span className="text-[#8A8A8A] font-normal">|</span>{' '}
                <span className="text-[#FF5A00] font-bold">1</span>ONE CHEF
              </span>
            </div>
            <p className="font-playfair italic text-[#8A8A8A] text-sm leading-relaxed">
              Gastronomía de autor, fuegos y oficio en Córdoba Capital.
            </p>
          </div>

          {/* Columna 2: Navegación rápida */}
          <div>
            <h4 className="font-anton text-xs tracking-wider text-white uppercase mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {[
                ['Menú', '#oficio'],
                ['Experiencia', '#galeria'],
                ['Sucursales Córdoba', '#reservas'],
                ['Reservas', '#reservas'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de servicio */}
          <div>
            <h4 className="font-anton text-xs tracking-wider text-white uppercase mb-4">
              Servicio
            </h4>
            <ul className="space-y-2.5 text-sm text-[#8A8A8A]">
              <li>
                <span className="block text-white font-mono text-xs uppercase tracking-widest mb-1">
                  Horario de cocina
                </span>
                Mar a Dom · 19:30 a 00:30 h
              </li>
              <li>
                <span className="block text-white font-mono text-xs uppercase tracking-widest mb-1">
                  Tolerancia de reserva
                </span>
                15 minutos de cortesía
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes y contacto */}
          <div>
            <h4 className="font-anton text-xs tracking-wider text-white uppercase mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.instagram.com/fuera_de_carta_by1chef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-200"
                >
                  WhatsApp Reservas
                </a>
              </li>
              <li>
                <span className="text-sm text-[#8A8A8A]">
                  Córdoba Capital, Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea metálica */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#252525] to-transparent mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#8A8A8A] tracking-wider uppercase font-mono">
            © {currentYear} Fuera de Carta | 1ONE CHEF. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#252525] tracking-wider uppercase font-mono">
            Hecho con acero y fuego para la cocina de oficio.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

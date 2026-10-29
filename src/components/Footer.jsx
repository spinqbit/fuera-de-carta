import React from 'react'

const footerLinks = {
  plataforma: [
    { label: 'Escandallo', href: '#escandallo' },
    { label: 'Duelos', href: '#duelos' },
    { label: 'Recetario', href: '#recetario' },
    { label: 'Comunidad', href: '#comunidad' },
  ],
  empresa: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Manifiesto', href: '#manifiesto' },
    { label: 'Prensa', href: '#prensa' },
    { label: 'Contacto', href: '#contacto' },
  ],
  legal: [
    { label: 'Privacidad', href: '#privacidad' },
    { label: 'Términos', href: '#terminos' },
    { label: 'Cookies', href: '#cookies' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com', external: true },
    { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
    { label: 'YouTube', href: 'https://youtube.com', external: true },
  ]
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer data-bg="3" className="bg-[#0B0B0B]/80 border-t border-[#252525] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Branding Principal */}
        <div className="flex items-center justify-between mb-12 pb-8 border-b border-[#252525]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black border border-[#8A8A8A] flex items-center justify-center font-anton text-[#FFFFFF] text-sm tracking-wider">
              FDC
            </div>
            <span className="font-bold text-sm tracking-[0.2em] text-white uppercase">
              FUERA DE CARTA <span className="text-[#8A8A8A] font-normal">| <span className="text-[#8A8A8A] font-bold">1</span>ONE CHEF</span>
            </span>
          </div>
          
          {/* Badge industrial */}
          <div className="px-4 py-1.5 border border-[#252525] text-xs font-mono text-[#8A8A8A] tracking-widest uppercase">
            Industrial Kitchen OS v1.0
          </div>
        </div>

        {/* Grid de Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Plataforma */}
          <div>
            <h4 className="font-anton text-xs tracking-wider text-white uppercase mb-4">
              Plataforma
            </h4>
            <ul className="space-y-3">
              {footerLinks.plataforma.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-anton text-xs tracking-wider text-white uppercase mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-anton text-xs tracking-wider text-white uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Comunidad */}
          <div>
            <h4 className="font-anton text-xs tracking-wider text-white uppercase mb-4">
              Comunidad
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                    <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-150 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#252525] rounded-none" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divisor metálico */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#252525] to-transparent mb-8" />

        {/* Bottom Bar: Copyright + Newsletter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xs text-[#8A8A8A] tracking-wider uppercase font-mono">
              © {currentYear} Fuera de Carta. Todos los derechos reservados.
            </p>
            <p className="text-xs text-[#252525] tracking-wider uppercase font-mono mt-1">
              Hecho con acero y fuego para la cocina de oficio.
            </p>
          </div>

          {/* Newsletter / CTA */}
          <div className="w-full md:w-auto">
            <form className="flex flex-col sm:flex-row gap-3" action="#newsletter" method="POST">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu email para el boletín técnico"
                className="flex-1 bg-[#0B0B0B] border border-[#252525] focus:border-[#8A8A8A] focus:outline-none px-4 py-3 text-sm text-white placeholder-[#252525] font-mono"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-transparent border border-[#8A8A8A] hover:border-white hover:text-white text-[#8A8A8A] font-anton text-sm tracking-wider transition-all duration-150 uppercase whitespace-nowrap"
              >
                Suscribir
              </button>
            </form>
          </div>

        </div>

      </div>
    </footer>
  )
}
const RocketLogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="flex-shrink-0"
  >
    <circle cx="18" cy="18" r="18" fill="#06B6D4" fillOpacity="0.15" />
    <path
      d="M18 8C18 8 13 13 13 20C13 22 14 24 14 24L18 22L22 24C22 24 23 22 23 20C23 13 18 8 18 8Z"
      fill="#06B6D4"
      stroke="#06B6D4"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="18" cy="17" r="2" fill="white" />
    <path d="M14 24L12 28L16 26" fill="#0891B2" stroke="#0891B2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 24L24 28L20 26" fill="#0891B2" stroke="#0891B2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 28L18 31L20 28" fill="#67E8F9" stroke="#67E8F9" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deployaBlue text-white" role="contentinfo">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="inline-flex items-center gap-2.5 mb-4 group" aria-label="Deploya - Ir al inicio">
              <RocketLogo />
              <span className="text-xl font-extrabold text-white tracking-tight group-hover:text-deployaGreen transition-colors duration-200">
                DEPLOYA
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Impulsando negocios con tecnología de vanguardia. Soluciones innovadoras para empresas modernas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Navegación</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-deployaGreen transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:contacto@deploya.com" className="hover:text-deployaGreen transition-colors duration-200">
                  contacto@deploya.com
                </a>
              </li>
              <li>
                <a href="tel:+51935602618" className="hover:text-deployaGreen transition-colors duration-200">
                  +51 935 602 618
                </a>
              </li>
              <li>Lima, Perú</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Síguenos</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-deployaGreen/20 text-gray-400 hover:text-deployaGreen flex items-center justify-center transition-all duration-200"
                  aria-label={`Síguenos en ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            &copy; {currentYear} Deploya. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
            <span>Hecho con</span>
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>en Lima, Perú</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";

const RocketLogo = () => (
  <svg
    width="36"
    height="36"
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
    <path
      d="M14 24L12 28L16 26"
      fill="#0891B2"
      stroke="#0891B2"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 24L24 28L20 26"
      fill="#0891B2"
      stroke="#0891B2"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 28L18 31L20 28"
      fill="#67E8F9"
      stroke="#67E8F9"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deployaBlue/95 backdrop-blur-md shadow-lg"
          : "bg-deployaBlue"
      }`}
      role="banner"
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 group"
          aria-label="Deploya - Ir al inicio"
        >
          <RocketLogo />
          <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-deployaGreen transition-colors duration-200">
            DEPLOYA
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contacto" className="btn-primary text-sm px-5 py-2.5">
            Contáctanos
          </a>
          <a
            href="https://wa.me/51935602618?text=Hola%2C%20necesito%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm px-5 py-2.5"
            aria-label="Contactar por WhatsApp"
          >
            <WhatsAppIcon />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-deployaGreen transition-colors rounded-lg hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="sr-only">{isOpen ? "Cerrar" : "Abrir"} menú</span>
          <div className="w-5 flex flex-col gap-1.5 items-center">
            <span
              className={`block h-0.5 w-5 bg-current rounded transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current rounded transition-all duration-300 ${
                isOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current rounded transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-16 sm:top-20 bg-deployaBlue/98 backdrop-blur-lg transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col items-center justify-center gap-2 px-6 py-8" aria-label="Navegacion movil">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 py-3 px-6 rounded-xl transition-all duration-200"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 w-full mt-6 pt-6 border-t border-white/10">
            <a href="#contacto" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">
              Contáctanos
            </a>
            <a
              href="https://wa.me/51935602618?text=Hola%2C%20necesito%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-whatsapp w-full justify-center"
              aria-label="Contactar por WhatsApp"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

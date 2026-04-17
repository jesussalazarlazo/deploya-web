const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center bg-gradient-to-br from-deployaBlue via-deployaBlueMid to-deployaBlueLight overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-deployaGreen/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 sm:w-[400px] sm:h-[400px] bg-deployaGreen/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-r from-deployaGreen/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-deployaGreenLight text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/10">
              <span className="w-2 h-2 bg-deployaGreen rounded-full animate-pulse" />
              Soluciones tecnológicas innovadoras
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 text-balance">
              Impulsamos tu negocio con{" "}
              <span className="gradient-text">tecnología de vanguardia</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Desarrollo web, backend, APIs, integración en la nube y consultoría
              tecnológica para empresas que buscan crecer en la era digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contacto" className="btn-primary text-base px-8 py-4 shadow-lg shadow-deployaGreen/25">
                Contáctanos
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://wa.me/51935602618?text=Hola%2C%20necesito%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4"
                aria-label="Contactar por WhatsApp"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 sm:gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm text-gray-400">Proyectos</div>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block" aria-hidden="true" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">30+</div>
                <div className="text-xs sm:text-sm text-gray-400">Clientes</div>
              </div>
              <div className="w-px h-10 bg-white/20 hidden sm:block" aria-hidden="true" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">99%</div>
                <div className="text-xs sm:text-sm text-gray-400">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="flex-1 flex justify-center lg:justify-end animate-float">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 bg-gradient-to-br from-deployaGreen/20 to-deployaGreen/5 rounded-3xl rotate-6 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-deployaGreen/30 to-transparent rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm">
                <img
                  src="/images/hero-illustration.jpg"
                  alt="Soluciones tecnológicas de Deploya"
                  className="w-full h-full object-cover rounded-3xl mix-blend-luminosity opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block" aria-hidden="true">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

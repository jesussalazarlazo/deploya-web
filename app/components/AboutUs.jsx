const values = [
  {
    title: "Compromiso",
    desc: "Nos dedicamos al 100% a cada proyecto, entregando resultados que superan las expectativas.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Excelencia",
    desc: "Aplicamos los más altos estándares de calidad en cada línea de código y cada diseño.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Colaboración",
    desc: "Trabajamos de la mano con nuestros clientes, integrando sus ideas en cada solución.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function AboutUs() {
  return (
    <section id="nosotros" className="section-padding bg-deployaLight">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-deployaGreen/20 to-deployaGreen/5 rounded-3xl blur-lg" aria-hidden="true" />
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/team.jpg"
                  alt="Equipo de trabajo de Deploya"
                  className="w-full h-64 sm:h-80 lg:h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deployaBlue/40 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="inline-block text-deployaGreen font-semibold text-sm uppercase tracking-wider mb-3">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deployaBlue mb-6 text-balance">
              Somos <span className="gradient-text">Deploya</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Somos una empresa tecnológica dedicada a brindar soluciones innovadoras.
              Nuestra misión es impulsar negocios a través de la tecnología, con la visión
              de ser líderes en innovación digital en Latinoamérica.
            </p>

            {/* Values */}
            <div className="space-y-5">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-deployaGreen/10 text-deployaGreen flex items-center justify-center group-hover:bg-deployaGreen group-hover:text-white transition-all duration-300">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-deployaBlue text-base sm:text-lg mb-1">{v.title}</h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

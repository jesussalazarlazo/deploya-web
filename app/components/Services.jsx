const WebIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const BackendIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const ConsultingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const services = [
  {
    title: "Desarrollo Web",
    desc: "Sitios modernos, responsive y escalables con las últimas tecnologías del mercado.",
    Icon: WebIcon,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Backend y APIs",
    desc: "Servicios robustos, seguros y de alto rendimiento para potenciar tu negocio.",
    Icon: BackendIcon,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Integración en la Nube",
    desc: "Escalabilidad y eficiencia en AWS, Azure o GCP adaptadas a tus necesidades.",
    Icon: CloudIcon,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Consultoría Tecnológica",
    desc: "Estrategia personalizada y soluciones a la medida de tu empresa.",
    Icon: ConsultingIcon,
    color: "from-orange-500 to-amber-500",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-deployaGreen font-semibold text-sm uppercase tracking-wider mb-3">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deployaBlue mb-4 text-balance">
            Soluciones tecnológicas
            <br className="hidden sm:block" />
            <span className="gradient-text"> adaptadas a tu negocio</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Ofrecemos servicios integrales para llevar tu empresa al siguiente nivel digital.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <article
              key={i}
              className="card group hover:-translate-y-2 cursor-default"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <s.Icon />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-deployaBlue mb-3 group-hover:text-deployaGreen transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

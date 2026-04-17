const StarIcon = () => (
  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-10 h-10 text-deployaGreen/20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
  </svg>
);

const testimonials = [
  {
    name: "Ana Pérez",
    position: "CEO de TechCorp",
    message: "Deploya transformó nuestro negocio digital. Su equipo es increíble, siempre proactivo y con soluciones innovadoras que superaron nuestras expectativas.",
    initials: "AP",
    rating: 5,
  },
  {
    name: "Carlos López",
    position: "CTO en FinSolutions",
    message: "Excelente soporte técnico y soluciones innovadoras. Su expertise en backend y cloud nos permitió escalar nuestra plataforma de manera eficiente.",
    initials: "CL",
    rating: 5,
  },
  {
    name: "María García",
    position: "Founder de StartUpX",
    message: "Su experiencia en backend y APIs nos permitió crecer rápido. La comunicación y calidad del trabajo fueron excepcionales desde el primer día.",
    initials: "MG",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-deployaGreen font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deployaBlue mb-4 text-balance">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <article key={i} className="card group relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-4 right-4">
                <QuoteIcon />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`${t.rating} de 5 estrellas`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Message */}
              <blockquote className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 relative z-10">
                &ldquo;{t.message}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-deployaGreen to-deployaGreenDark flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-deployaBlue text-sm sm:text-base">{t.name}</h4>
                  <span className="text-deployaGray text-xs sm:text-sm">{t.position}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

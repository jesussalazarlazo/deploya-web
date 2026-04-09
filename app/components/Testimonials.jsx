const testimonials = [
  { name: "Ana Pérez", position: "CEO de TechCorp", message: "Deploya transformó nuestro negocio digital, un equipo increíble." },
  { name: "Carlos López", position: "CTO en FinSolutions", message: "Excelente soporte y soluciones innovadoras, muy recomendable." },
  { name: "María García", position: "Founder StartUpX", message: "Su experiencia en backend y APIs nos permitió crecer rápido." },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-deployaBlue mb-4">Testimonios</h2>
        <p className="text-gray-600">Lo que nuestros clientes dicen de nosotros</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-deployaLight p-6 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 mb-4">"{t.message}"</p>
            <h4 className="font-semibold text-deployaBlue">{t.name}</h4>
            <span className="text-gray-500">{t.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
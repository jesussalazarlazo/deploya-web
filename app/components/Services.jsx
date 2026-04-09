const services = [
  { title: "Desarrollo Web", desc: "Sitios modernos, responsive y escalables.", icon: "/images/icons/web.jpg" },
  { title: "Backend y APIs", desc: "Servicios robustos y seguros para tu negocio.", icon: "/images/icons/backend.jpg" },
  { title: "Integración en la nube", desc: "Escalabilidad y eficiencia en AWS, Azure o GCP.", icon: "/images/icons/cloud.jpg" },
  { title: "Consultoría tecnológica", desc: "Estrategia y soluciones a la medida.", icon: "/images/icons/consulting.jpg" },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-deployaBlue mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600">Soluciones tecnológicas adaptadas a tu negocio</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((s, i) => (
          <div key={i} className="bg-deployaLight p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2">
            <img src={s.icon} alt={s.title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-deployaBlue mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
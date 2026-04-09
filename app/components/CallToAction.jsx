export default function CallToAction() {
  return (
    <section className="py-20 bg-deployaBlue text-white text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quieres impulsar tu negocio con tecnología?</h2>
      <p className="mb-6">Contáctanos hoy mismo y llevemos tu empresa al siguiente nivel.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#contacto" className="bg-deployaGreen px-6 py-3 rounded hover:bg-green-600 transition">Contáctanos</a>
        <a href="https://wa.me/51912345678" target="_blank" className="bg-white text-deployaBlue px-6 py-3 rounded hover:bg-gray-100 transition">WhatsApp</a>
      </div>
    </section>
  );
}
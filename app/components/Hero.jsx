export default function Hero() {
  return (
    <section id="inicio" className="bg-deployaLight pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-4">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-deployaBlue mb-4">
            Impulsamos tu negocio con tecnología de vanguardia
          </h1>
          <p className="text-gray-700 mb-6">
            Desarrollo web, backend, APIs, integración en la nube y consultoría tecnológica para empresas modernas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contacto" className="bg-deployaGreen text-white px-6 py-3 rounded hover:bg-green-600 transition">Contáctanos</a>
            <a href="https://wa.me/51935602618" target="_blank" className="bg-deployaBlue text-white px-6 py-3 rounded hover:bg-blue-800 transition">WhatsApp</a>
          </div>
        </div>
<div className="flex-1 -mt-8 md:-mt-16 flex justify-center md:justify-end">
  <img
    src="/images/hero-illustration.jpg"
    alt="Tecnología"
    className="w-full max-w-md md:max-w-lg"
  />
</div>
      </div>
    </section>

  );
}
export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-deployaLight">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-deployaBlue mb-4">Contacto</h2>
          <p className="text-gray-700 mb-6">Envíanos un mensaje y nos pondremos en contacto contigo.</p>
          <form action="https://api.placeholder.com/contact" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Nombre" className="w-full p-3 rounded border border-gray-300 focus:ring-deployaGreen focus:outline-none"/>
            <input type="email" name="email" placeholder="Email" className="w-full p-3 rounded border border-gray-300 focus:ring-deployaGreen focus:outline-none"/>
            <textarea name="message" placeholder="Mensaje" className="w-full p-3 rounded border border-gray-300 focus:ring-deployaGreen focus:outline-none"></textarea>
            <button type="submit" className="bg-deployaBlue text-white px-6 py-3 rounded hover:bg-blue-800 transition">Enviar</button>
          </form>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-deployaBlue">Información de Contacto</h3>
          <p>Email: contacto@deploya.com</p>
          <p>Teléfono: +51 935 602 618</p>
          <p>Dirección: Lima, Perú</p>
          <a href="https://wa.me/51935602618" target="_blank" className="inline-block mt-4 bg-deployaGreen text-white px-6 py-3 rounded hover:bg-green-600 transition">Escríbenos al WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
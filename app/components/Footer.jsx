export default function Footer() {
  return (
    <footer className="bg-deployaBlue text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold mb-2">Deploya</h3>
          <p>Impulsando negocios con tecnología de vanguardia.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Navegación</h3>
          <ul>
            <li><a href="#inicio" className="hover:text-deployaGreen">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-deployaGreen">Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-deployaGreen">Sobre Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-deployaGreen">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Redes Sociales</h3>
          <div className="flex gap-2">
            <a href="#" className="hover:text-deployaGreen">LinkedIn</a>
            <a href="#" className="hover:text-deployaGreen">Twitter</a>
            <a href="#" className="hover:text-deployaGreen">Facebook</a>
          </div>
          <p className="mt-4 text-gray-300 text-sm">© 2026 Deploya. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
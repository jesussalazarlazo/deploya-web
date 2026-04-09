import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-deployaBlue text-white fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Deploya</div>
        <nav className="space-x-6 hidden md:flex">
          <Link href="#inicio" className="hover:text-deployaGreen">Inicio</Link>
          <Link href="#servicios" className="hover:text-deployaGreen">Servicios</Link>
          <Link href="#nosotros" className="hover:text-deployaGreen">Sobre Nosotros</Link>
          <Link href="#testimonios" className="hover:text-deployaGreen">Testimonios</Link>
          <Link href="#contacto" className="hover:text-deployaGreen">Contacto</Link>
        </nav>
        <div className="space-x-2 hidden md:flex">
          <Link href="#contacto" className="bg-deployaGreen text-white px-4 py-2 rounded hover:bg-green-600 transition">Contáctanos</Link>
          <a href="https://wa.me/51935602618" target="_blank" className="bg-white text-deployaBlue px-4 py-2 rounded hover:bg-gray-100 transition">WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
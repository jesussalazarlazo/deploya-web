export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-deployaLight">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-deployaBlue mb-4">Sobre Deploya</h2>
          <p className="text-gray-700 mb-4">
            Deploya es una empresa tecnológica dedicada a brindar soluciones innovadoras. Nuestra misión es impulsar negocios a través de la tecnología, nuestra visión es ser líderes en innovación, y nuestros valores incluyen compromiso, excelencia y colaboración.
          </p>
        </div>
        <div className="flex-1">
          <img src="/images/team.jpg" alt="Equipo Deploya" className="w-full" />
        </div>
      </div>
    </section>
  );
}
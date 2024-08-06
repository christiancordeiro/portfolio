import ExperienciaUl from "../Components/Sobre/ExperienciaUl"
import vector from "../assets/Vector3.svg"

const QuemSou = () => {
  return (
    <section id="quemSou" className="mt-52 xl:mt-[27rem] relative">
      <div className="flex justify-center items-center">
        <div className="m-auto portfolio">
          <h1 className="font-CodeSquared animated-text">quem sou</h1>
        </div>
      </div>
      <div className="display-grid relative pt-32">
        <div className="font-CallingCode text-gray-300 text-[1rem] tracking-wide flex items-center flex-col">
          <h2 className="text-green-400 text-3xl md:text-4xl mb-12 font-CodeSquared">
            Sobre mim
          </h2>
          <p>
            Sou um desenvolvedor front-end e UI Designer com experiência em
            criar interfaces de usuário atraentes e funcionais. Trabalho como
            freelancer, utilizando React e TypeScript para desenvolver soluções
            web dinâmicas e responsivas. Atualmente, estou cursando Análise e
            Desenvolvimento de Sistemas, o que me permite aprofundar meus
            conhecimentos em tecnologia e aprimorar minhas habilidades de
            desenvolvimento.
          </p>
          <img
            src={vector}
            className="timeline-2 hidden xl:block"
            alt="timeline svg"
          />
        </div>
        <div className="w-[1px] h-full bg-gray-700 mx-4"></div>
        <div className="font-CallingCode text-gray-100 text-[1rem] flex items-center flex-col">
          <h2 className="text-green-400 text-3xl md:text-4xl mb-12 font-CodeSquared">
            Experiência
          </h2>
          <ExperienciaUl />
        </div>
      </div>
    </section>
  )
}

export default QuemSou

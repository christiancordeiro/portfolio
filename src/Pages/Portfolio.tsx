import { useEffect, useRef, useState } from "react"
import Next from "../assets/Next.svg"
import Prev from "../assets/Prev.svg"
import { listProjectPortfolio } from "../Utils/ProjetosLista"
import vectorPortfolio from "../assets/Vector-portfolio.svg"

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const pRef = useRef<HTMLParagraphElement>(null)

  const nextPrevButton: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    const button = event.currentTarget.id
    if (button === "next") {
      setCurrentIndex((currentIndex + 1) % listProjectPortfolio.length)
    } else if (button === "prev") {
      setCurrentIndex(
        (currentIndex - 1 + listProjectPortfolio.length) %
          listProjectPortfolio.length
      )
    }
  }

  useEffect(() => {
    if (h2Ref.current && pRef.current) {
      h2Ref.current?.classList.remove("animated-item")
      pRef.current?.classList.remove("animated-text-dropIn")
      void h2Ref.current.offsetWidth
      h2Ref.current?.classList.add("animated-item")
      pRef.current?.classList.add("animated-text-dropIn")
    }
  }, [currentIndex])

  const currentProject = listProjectPortfolio[currentIndex]

  return (
    <section id="portfolio" className="mt-52 xl:mt-[27rem] relative">
      <div className="flex justify-center items-center">
        <div className="m-auto portfolio">
          <h1 className="font-CodeSquared animated-text">Portfolio</h1>
        </div>
      </div>

      <div className="grid relative grid-cols-1 gap-8 md:gap-24 md:grid-cols-2 justify-center items-center pt-20 md:pt-32 lg:pt-12">
        <div className="flex justify-center items-center mx-auto relative w-80 h-80 xl:w-[25rem] xl:h-[25rem] rounded-full">
          <div className="flex justify-center items-center absolute w-full h-full rounded-full">
            <a
              href={currentProject.projetoSrc}
              className="flex justify-center items-center w-full h-full z-10"
              target="_blank"
            >
              <img
                src={currentProject.img}
                className="animated-portfolio object-cover w-4/5 h-4/5 rounded-full"
                alt="Imagem do projeto"
              />
            </a>
            <span
              className="hidden lg:block absolute w-full h-full rounded-full pulse-base"
              style={{ animationDelay: "0s" }}
            ></span>
            <span
              className="hidden lg:block absolute w-full h-full rounded-full pulse-base"
              style={{ animationDelay: "2s", padding: "300px" }}
            ></span>
          </div>
        </div>

        <div className="relative portfolio-p font-CallingCode max-w-full">
          <h2
            ref={h2Ref}
            className="text-green-400 text-3xl md:text-4xl mb-4 font-CodeSquared"
          >
            {currentProject.nome}
          </h2>

          <p
            ref={pRef}
            className="animated-text-dropIn text-gray-300 text-sm md:text-[1rem] tracking-wide"
          >
            {currentProject.descricao}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center w-full z-10 md:px-12 pt-20">
          <div>
            <button
              id="prev"
              onClick={nextPrevButton}
              className="border-2 rounded-full p-6 transform transition-transform duration-300 md:hover:scale-150"
              aria-label="Projeto anterior"
            >
              <img src={Prev} alt="prev" className="w-24 md:w-auto"></img>
            </button>
          </div>

          <div className="w-full flex justify-center">
            <progress
              value={(currentIndex / (listProjectPortfolio.length - 1)) * 100}
              max="100"
              className="custom-progress w-4/5 h-3"
            ></progress>
          </div>

          <div>
            <button
              id="next"
              onClick={nextPrevButton}
              className="border-2 rounded-full p-6 transform transition-transform duration-300 md:hover:scale-150"
              aria-label="Próximo projeto"
            >
              <img src={Next} alt="next" className="w-24 md:w-auto"></img>
            </button>
          </div>
        </div>
        <img
          src={vectorPortfolio}
          className="port-vector1 hidden xl:block"
          alt="timeline svg"
        />
      </div>
    </section>
  )
}

export default Portfolio

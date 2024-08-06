import me from "../assets/img/eu.jpg"
import vector from "../assets/Vector3.svg"

const Home = () => {
  return (
    <main
      id="home"
      className="grid justify-center grid-cols-1 sm:grid-cols-2  gap-16 lg:gap-24 xl:gap-44 sm:gap-0 items-center mt-24 md:mt-14 relative"
    >
      <div className="font-CallingCode text-base">
        <p className="text-[#686868] mb-4 md:text-xl animated-item">
          &lt;p&gt;
          <span className="text-green-400 text-lg xl:text-xl">
            Hello World!
          </span>
          &lt;p/&gt;
        </p>

        <div className="before">
          <h1 className="animated-text-dropIn text-[2.3rem] leading-snug xl:leading-snug xl:text-5xl font-CodeSquared pl-8">
            Christian <br />
            Cordeiro
          </h1>
        </div>

        <p className="text-[#686868] mt-4 text-lg xl:text-xl animated-item">
          &lt;p&gt;
          <span className="text-green-400 leading-normal">
            Desenvolvedor Front End & <br /> UI Designer
          </span>
          &lt;p/&gt;
        </p>
        <img
          src={vector}
          className="timeline hidden xl:block"
          alt="timeline svg"
        />
      </div>

      <div className="flex justify-center items-center relative w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto">
        <div className="border-l-2 rounded-full animate-spin w-full h-full flex justify-center items-center absolute"></div>
        <div className="border-r-2 rounded-full animate-spin w-full h-full flex justify-center items-center absolute"></div>
        <div className="absolute flex justify-center items-center">
          <img
            src={me}
            className="rounded-full w-3/4 md:w-4/5 border-2"
            alt="Imagem do desenvolvedor"
          />
        </div>
      </div>
    </main>
  )
}

export default Home

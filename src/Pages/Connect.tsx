import ConnectCircle from "../Components/Connect/ConnectCircle"

const Connect = () => {
  return (
    <section className="mt-52 xl:mt-[27rem] relative">
      <div className="flex justify-center items-center">
        <div className="m-auto portfolio">
          <h1 className="font-CodeSquared animated-text">Contato</h1>
        </div>
      </div>
      <div className="pt-32 pb-8">
        <div className="font-CallingCode text-lg">
          <div className="flex justify-center items-center gap-8 md:gap-8">
            <div className="flex flex-col">
              <ConnectCircle titulo="Gmail" href="" target="_blank" />
              <div className="ml-0 mt-8 md:ml-36 md:mt-0">
                <ConnectCircle
                  titulo="Instagram"
                  href="https://www.instagram.com/christianc_f/"
                  target="_blank"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <ConnectCircle
                titulo="LinkedIn"
                href="https://www.linkedin.com/in/christiancordeiro/"
                target="_blank"
              />
              <div className="ml-0 mt-8 md:ml-36 md:mt-0">
                <ConnectCircle
                  titulo="Behance"
                  href="https://www.behance.net/christicordeir"
                  target="_blank"
                />
              </div>
            </div>
            {/* <ConnectCircle
              titulo="Dribble"
              href="https://dribbble.com/christiancordeirof/"
              target="_blank"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect

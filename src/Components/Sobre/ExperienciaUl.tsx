import ExperienciaLi from "./ExperienciaLi"

const ExperienciaUl = () => {
  return (
    <ul className="flex justify-center items-center gap-4 flex-wrap">
      <ExperienciaLi titulo={"Figma"} />
      <ExperienciaLi titulo={"HTML"} />
      <ExperienciaLi titulo={"CSS"} />
      <ExperienciaLi titulo={"Typescript"} />
      <ExperienciaLi titulo={"Javascript"} />
      <ExperienciaLi titulo={"React"} />
    </ul>
  )
}

export default ExperienciaUl

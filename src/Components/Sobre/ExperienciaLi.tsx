type ExpProps = {
  titulo: string
}

const ExperienciaLi: React.FC<ExpProps> = ({ titulo }) => {
  return (
    <li className="bg-green-900 p-4 rounded-full">
      <h3>{titulo}</h3>
    </li>
  )
}

export default ExperienciaLi

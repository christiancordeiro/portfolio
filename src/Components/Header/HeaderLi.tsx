type PropsHeaderLi = {
  titulo: string
  num: string
}

const HeaderLi: React.FC<PropsHeaderLi> = ({ titulo, num }) => {
  return (
    <li className="animated-item">
      <a href="#" className="xl:px-4 xl:py-3 py-2">
        //{num}. &lt;{titulo} /&gt;
      </a>
    </li>
  )
}

export default HeaderLi

type PropsHeaderLi = {
  titulo: string
  num: string
  href: string
}

const HeaderLi: React.FC<PropsHeaderLi> = ({ titulo, num, href }) => {
  return (
    <li className="animated-item">
      <a href={href} className="xl:px-4 xl:py-3 py-2">
        //{num}. &lt;{titulo} /&gt;
      </a>
    </li>
  )
}

export default HeaderLi

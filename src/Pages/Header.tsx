import HeaderLi from "../Components/Header/HeaderLi"
import HeaderUl from "../Components/Header/HeaderUl"
import MyLogo from "../assets/MyLogo.svg"

const Header = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center text-gray-100 text-xs xl:text-base font-CallingCode">
        <HeaderUl>
          <HeaderLi num="01" titulo={"Home"} />
          <HeaderLi num="02" titulo={"Portfolio"} />
        </HeaderUl>

        <img src={MyLogo} className="px-3 w- h-10" alt="CC Logo" />

        <HeaderUl>
          <HeaderLi num="03" titulo={"Quem sou"} />
          <HeaderLi num="04" titulo={"Contato"} />
        </HeaderUl>
      </nav>
    </header>
  )
}

export default Header

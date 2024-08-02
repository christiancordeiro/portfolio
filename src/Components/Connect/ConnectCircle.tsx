type ConnectProps = {
  titulo: string
  href: string
}

const ConnectCircle: React.FC<
  ConnectProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ titulo, href, ...props }) => {
  return (
    <a
      href={href}
      className="preencher flex justify-center items-center border-4 rounded-full border-green-400 w-36 h-36 px-16 md:w-52 md:h-52 md:px-20 text-center"
      {...props}
    >
      &lt;&gt; {titulo} &lt;/&gt;
    </a>
  )
}

export default ConnectCircle

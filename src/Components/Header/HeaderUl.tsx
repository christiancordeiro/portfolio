import React, { PropsWithChildren } from "react"

const HeaderUl: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul className="flex flex-col justify-between items-center  gap-2">
      {children}
    </ul>
  )
}

export default HeaderUl

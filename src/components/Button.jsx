import React from 'react'

export const BTN_TYPES = {
    SOLID: "bg-white text-black",
    OUTLINE: "bg-transparent text-white border-white border-2",
    SOLIDINVERSE: "bg-black text-white",
    OUTLINEINVERSE: "bg-transparent text-black border-black border-2"
}

const Button = ({
    text,
    onClick,
    type = "SOLID"
}) => {
  return (
    <div onClick={onClick} className={`w-full text-base sm:text-lg 2xl:text-2xl text-center border p-2 rounded-md cursor-pointer ${BTN_TYPES[type]}`} >{text}</div>
  )
}

export default Button
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
    type = "SOLID",
    disabled = false
}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`w-full text-base sm:text-lg 2xl:text-2xl text-center disabled:cursor-not-allowed border p-2 rounded-md cursor-pointer ${BTN_TYPES[type]}`} >{text}</button>
  )
}

export default Button
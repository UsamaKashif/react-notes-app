import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = ({title="Page not found"}) => {
  return (
    <div className='h-screen flex flex-col items-center gap-2 justify-center'>
        <h1 className='text-lg 2xl:text-xl font-bold'>{title}</h1>
        <Link to={"/"}>
            <p className='border-b-2 pb-1'>Back Home</p>
        </Link>
    </div>
  )
}

export default NotFound
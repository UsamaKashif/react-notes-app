import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ id }) => {
  return (
    <Link to={`/notes/${id}`}>
      <div className='bg-black text-white cursor-pointer rounded-lg w-[250px] h-fit min-h-[130px] py-6 px-4 flex flex-col justify-between'>
        <section className='w-full break-all'>
          <h2 className='max-h-[120px] truncate 2xl:text-xl'>This is the title</h2>
          <small className='text-md'>- work</small>
          <p className='opacity-90 my-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae massa erat. Quisque aliquam consequat diam at vehicula. Duis at diam quis dolor ... </p>
        </section>
        <small className='text-md text-gray-500'>24/02/2023</small>
      </div>
    </Link>
  )
}

export default Cards
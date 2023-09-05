import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ note }) => {
  const {id, category, summary, createdat, title} = note
  function truncate(str, n) {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <Link to={`/notes/${id}`}>
      <div className='bg-black text-white cursor-pointer rounded-lg w-[250px] min-h-[260px] max-h-[260px] py-6 px-4 flex flex-col justify-between'>
        <section className='w-full break-all'>
          <h2 className='max-h-[120px] truncate 2xl:text-xl'>{title}</h2>
          <small className='text-md'>- {category}</small>
          <p className='opacity-90 my-3'> {truncate(summary, 150)} </p>
        </section>
        <small className='text-md text-gray-500'> {createdat} </small>
      </div>
    </Link>
  )
}

export default Cards
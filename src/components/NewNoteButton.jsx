import React from 'react'
import NewNote from './NewNote'

const NewNoteButton = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <button onClick={() => setOpen(prev => !prev)} className='fixed right-3 md:right-7 rounded-full text-black cursor-pointer p-5 md:p-8 bottom-7 bg-white shadow-md shadow-gray-600'>New Note</button>
      <NewNote open={open} setOpen={setOpen} />
    </>
  )
}

export default NewNoteButton
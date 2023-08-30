import { XSquare } from 'lucide-react'
import React from 'react'

const Modal = ({children, title, open, setOpen}) => {
  return (
    <div className={`${open ? 'fixed' : 'hidden'} inset-0 z-10 bg-black bg-opacity-75 p-3 backdrop-blur-sm flex justify-center items-center`}>
        <div className='bg-white text-black min-w-[300px] rounded-lg p-2'>
            <section className='flex items-center justify-between border-b-2 pb-2'>
              <h1>{title}</h1>
              <XSquare className='cursor-pointer' onClick={() => setOpen(false)} />
            </section>
            <section className='w-full pt-3 pb-1'>
              {children}
            </section>
        </div>
    </div>
  )
}

export default Modal
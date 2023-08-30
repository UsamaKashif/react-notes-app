import React from 'react'
import Modal from './Modal'
import Button from './Button'

const NewNote = ({open, setOpen}) => {
    return (
        <Modal open={open} setOpen={setOpen} title={"New Note"}>
            <form className='flex flex-col gap-2'>
                <input className='w-full border-2 rounded-md text-base placeholder:text-sm px-2 border-black py-2' type="text" placeholder='New Note Title' />
                <Button text={"Create Note"} type='SOLIDINVERSE' />
            </form>
        </Modal>
    )
}

export default NewNote
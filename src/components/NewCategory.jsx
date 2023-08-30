import React from 'react'
import Modal from './Modal'
import Button from './Button'

const NewCategory = ({open, setOpen}) => {
    return (
        <Modal open={open} setOpen={setOpen} title={"New Category"}>
            <form className='flex flex-col gap-2'>
                <input className='w-full border-2 rounded-md text-base placeholder:text-sm px-2 border-black py-2' type="text" placeholder='New Category Name' />
                <Button text={"Create Category"} type='SOLIDINVERSE' />
            </form>
        </Modal>
    )
}

export default NewCategory
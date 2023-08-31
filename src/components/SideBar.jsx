import React from 'react'
import Button from './Button'
import { Menu, MoveLeft } from 'lucide-react'



const SideBar = ({children, sidebarBtnTitle="SignOut", sideBarBtnOnClick=()=>{}}) => {
  
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  
  return (
    <>
      <div className={`h-full ${sidebarOpen ? 'fixed' : 'hidden lg:flex'} lg:relative left-0 top-0 z-10 bottom-0 col-span-3 flex flex-col`}>
        <div className='sticky top-3 flex  lg:max-h-[500px] text-white flex-col h-full justify-between p-4 bg-black  lg:rounded-lg'>
          <section className='flex-1 pb-2'>
            <MoveLeft className='ml-auto lg:hidden cursor-pointer' onClick={() => setSidebarOpen(false)} />

            {children}
            
          </section>
          {/* logout button */}
          <Button text={sidebarBtnTitle} onClick={sideBarBtnOnClick} type='OUTLINE' />
        </div>
      </div>
      <Menu onClick={() => setSidebarOpen(true)} className='lg:hidden col-span-1 sticky top-0 cursor-pointer' />
      
    </>
  )
}

export default SideBar
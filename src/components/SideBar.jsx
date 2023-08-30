import React from 'react'
import Profile from './Profile'
import Button from './Button'
import { Menu, MoveLeft } from 'lucide-react'
import NewCategory from './NewCategory'

const categories = [{
  name: "All",
  id: 1
}, {
  name: "Home",
  id: 2
}, {
  name: "Work",
  id: 3
}]

const SideBar = () => {
  const [newCatOpen, setnewCatOpen] = React.useState(false)
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState({
    name: "All",
    id: 1
  })
  return (
    <>
      <div className={`h-full ${sidebarOpen ? 'fixed' : 'hidden lg:flex'} lg:relative left-0 top-0 z-10 bottom-0 col-span-3 flex flex-col`}>
        <div className='sticky top-3 flex  lg:max-h-[500px] text-white flex-col h-full justify-between p-4 bg-black  lg:rounded-lg'>
          <section>
            <MoveLeft className='ml-auto lg:hidden cursor-pointer' onClick={() => setSidebarOpen(false)} />
            {/* User Profile */}
            <Profile />
            {/* Create new category */}
            <Button onClick={() => setnewCatOpen(prev => !prev)} text={"Create new category"} />
            {/* list of categories */}
            <section className='max-h-[200px] overflow-y-auto mt-6'>
              {
                categories.map((cat) => {
                  return (
                    <p key={cat.id} onClick={() => {
                      setSelectedCategory(cat)
                    }} className={`${selectedCategory.id === cat.id ? 'bg-gray-300 bg-opacity-25' : ''} cursor-pointer py-2 mb-1 px-2`}>{cat.name}</p>
                  )
                })
              }
            </section>
          </section>
          {/* logout button */}
          <Button text={"SignOut"} type='OUTLINE' />
        </div>
      </div>
      <Menu onClick={() => setSidebarOpen(true)} className='lg:hidden col-span-1 sticky top-0 cursor-pointer' />
      <NewCategory open={newCatOpen} setOpen={setnewCatOpen} />
    </>
  )
}

export default SideBar
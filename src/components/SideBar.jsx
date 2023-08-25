import React from 'react'
import Profile from './Profile'
import Button from './Button'

const SideBar = () => {
  return (
    <div className='h-full text-white flex flex-col justify-between p-4 bg-black col-span-3 rounded-lg'>
      <section>
        {/* User Profile */}
        <Profile />
        {/* Create new category */}
        <Button />
        {/* list of categories */}
      </section>
      {/* logout button */}
      <Button />
    </div>
  )
}

export default SideBar
import React from 'react'

const Profile = ({email, photo}) => {
  return (
    <section className='flex items-center gap-3 pt-2 pb-6 overflow-hidden max-w-full'>
        <div className='min-w-[40px] w-[40px] aspect-square h-auto overflow-hidden bg-gray-200 rounded-full' >
          <img src={photo} className='object-cover w-full h-full' alt={email} />
        </div>
        <h1 className='text-base lg:text-lg 2xl:text-xl break-all ' >{email}</h1>
    </section>
  )
}

export default Profile
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='container p-2 mx-auto min-h-screen mb-8 grid grid-cols-12 gap-4'>
        {children}
    </div>
  )
}

export default Layout
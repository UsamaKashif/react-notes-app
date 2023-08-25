import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='container p-2 mx-auto min-h-screen h-screen grid grid-cols-12 gap-2'>
        {children}
    </div>
  )
}

export default Layout
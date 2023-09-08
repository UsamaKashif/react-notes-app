import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router';
import { auth } from '../firebase';

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          photo: user.photoURL,
          uid: user.uid,
        })
      } else {
        setUser(null)
        navigate("/")
      }

    })
  }, [navigate])
  return (
    <div className='container p-2 mx-auto min-h-screen mb-8 grid grid-cols-12 gap-4'>
      <Outlet context={{ user, setUser }} />
    </div>
  )
}

export default Layout
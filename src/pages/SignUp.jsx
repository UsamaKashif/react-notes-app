import React, { useEffect } from 'react'
import Button from '../components/Button'
import { auth, db } from '../firebase';
import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from '@firebase/auth';
import { useNavigate, useOutletContext } from 'react-router';
import { doc, setDoc } from '@firebase/firestore';

const SignUp = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const { user } = useOutletContext();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const { isNewUser } = getAdditionalUserInfo(result)  
        const uid = result.user.uid;
        if (isNewUser) {
          await setDoc(doc(db, "users", uid), {
            categories: [{
              name: "Home",
              id: 1
            }, {
              name: "Work",
              id: 2
            }]
          })
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  useEffect(() => {
    if (user) {
      navigate('/notes');
    }
  }, [navigate, user])


  return (
    <main className='h-screen col-start-4 col-end-9 flex items-center justify-center'>
      <Button onClick={handleSignIn} text={"SignIn With Google"} type='SOLIDINVERSE' />
    </main>
  )
}

export default SignUp
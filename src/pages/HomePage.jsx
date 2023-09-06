import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import Cards from '../components/Cards'
import NewNoteButton from '../components/NewNoteButton'
import Profile from '../components/Profile'
import Button from '../components/Button'
import NewCategory from '../components/NewCategory'
import { signOut } from '@firebase/auth'
import { auth, db } from '../firebase'
import { useOutletContext } from 'react-router'
import { arrayUnion, collection, doc, getDoc, onSnapshot, query, updateDoc, where } from '@firebase/firestore'


const HomePage = () => {
  const [categories, setCategories] = React.useState([])
  const [selectedCategory, setSelectedCategory] = React.useState({
    name: "All",
    id: 0
  })
  const [newCatOpen, setnewCatOpen] = React.useState(false)
  const { user } = useOutletContext();
  const [notes, setNotes] = useState([])

  const handleSignout = () => {
    signOut(auth).then(() => {
      console.log("Signed out")
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {

    let unsub;
    if (user) {
      let notesCol;
      if (selectedCategory.name !== "All") {
        notesCol = query(collection(db, "users", user?.uid, "notes"), where("category", "==", selectedCategory.name))
      } else {
        notesCol = collection(db, "users", user?.uid, "notes")
      }
      unsub = onSnapshot(notesCol, (snap) => {
        const notes = []
        snap.forEach((doc) => {
          const data = doc.data()
          const date = new Date(data.createdat.toDate())
          const note = {
            id: doc.id,
            category: data.category,
            createdat: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            title: data.title,
            note: data.note,
            summary: data.summary,
          }
          notes.push(note)
        });
        setNotes(notes)
      })
    }

    return () => {
      user && unsub()
      setNotes([])
    };
  }, [user, selectedCategory])

  useEffect(() => {
    // fetch categories from db
    async function fetchCategories() {
      if (user) {
        // fetch categories from db
        const docRef = doc(db, "users", user?.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const { categories } = docSnap.data()
          setCategories(prev => [{
            name: "All",
            id: 0
          }, ...categories])
        } else {
          console.log("No such document!");

        }

      }
    }

    fetchCategories()


    return () => {
      setCategories([])
    }
  }, [user])

  const addCategory = async (name) => {
    if (name.length === 0) return
    const newCat = {
      name,
      id: categories.length
    }
    const categoriesBackup = categories
    try {
      const usersRef = doc(db, "users", user?.uid);
      setCategories(prev => [...prev, newCat])
      await updateDoc(usersRef, {
        categories: arrayUnion(newCat)

      });
    } catch {
      setCategories(categoriesBackup)
    }
  }


  if (!user) return (<></>)

  return (
    <>
      <SideBar sideBarBtnOnClick={handleSignout}>
        <>
          {/* User Profile */}
          <Profile email={user?.email} photo={user?.photo} />
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
          <NewCategory onClick={addCategory} open={newCatOpen} setOpen={setnewCatOpen} />
        </>
      </SideBar>
      <section className='col-span-11 lg:col-span-9 h-full bg-gray-200 rounded-lg' >
        {/* list of notes */}

        <section className='flex flex-wrap items-start justify-center md:justify-start gap-3 py-6 px-12'>
          {
            notes.length > 0 ? (
              notes.map((note, i) => (
                <Cards key={note.id} note={note} />
              ))
            ) : (
              <p className='text-center w-full'>No note created</p>
            )
          }
        </section>
      </section>
      <NewNoteButton categories={categories} />
    </>
  )
}

export default HomePage
import React from 'react'
import Layout from '../components/Layout'
import SideBar from '../components/SideBar'
import Cards from '../components/Cards'
import NewNoteButton from '../components/NewNoteButton'
import Profile from '../components/Profile'
import Button from '../components/Button'
import NewCategory from '../components/NewCategory'

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

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState({
    name: "All",
    id: 1
  })
  const [newCatOpen, setnewCatOpen] = React.useState(false)
  return (
    <Layout>
      <SideBar>
        <>
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
          <NewCategory open={newCatOpen} setOpen={setnewCatOpen} />
        </>
      </SideBar>
      <section className='col-span-11 lg:col-span-9 h-full bg-gray-200 rounded-lg' >
        {/* list of notes */}

        <section className='flex flex-wrap items-start justify-center gap-3 py-6 px-2'>
          {
            new Array(5).fill(0).map((_, i) => (
              <Cards key={i} id={i} />
            ))
          }
        </section>
      </section>
      <NewNoteButton />
    </Layout>
  )
}

export default HomePage
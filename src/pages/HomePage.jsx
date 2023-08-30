import React from 'react'
import Layout from '../components/Layout'
import SideBar from '../components/SideBar'
import Cards from '../components/Cards'
import NewNoteButton from '../components/NewNoteButton'

const HomePage = () => {
  return (
    <Layout>
        <SideBar />
        <section className='col-span-11 lg:col-span-9 h-full bg-gray-200 rounded-lg' >
            {/* list of notes */}

            <section className='flex flex-wrap items-start justify-center gap-3 py-6 px-2'>
            {
                new Array(5).fill(0).map((_, i) => (
                    <Cards key={i} />
                ))
            }
            </section>
        </section>
        <NewNoteButton />
    </Layout>
  )
}

export default HomePage
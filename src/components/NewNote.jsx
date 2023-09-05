import React, { useEffect } from 'react'
import Modal from './Modal'
import Button from './Button'
import { addDoc, collection, doc } from '@firebase/firestore'
import { db } from '../firebase'
import { useOutletContext } from 'react-router'

const NewNote = ({ open, setOpen, categories }) => {
    const [title, setTitle] = React.useState("")
    const [category, setCategory] = React.useState()
    const [summary, setSummary] = React.useState("")
    const { user } = useOutletContext();
    const [creating, setCreating] = React.useState(false)

    useEffect(() => {
        if (categories.length > 0) {
            setCategory(categories[1].name)
        }
    }, [categories])

    async function AddNote(e) {
        e.preventDefault()
        // add note to db
        if (title.length === 0 || summary.length === 0) return

        // await addDoc(collection(db, "users", user?.id, "notes"), {
        //     title,
        //     summary,
        //     category,
        //     note: ""
        // });

        setCreating(true)

        const docRef = doc(db, "users", user.uid);
        const colRef = collection(docRef, "notes")
        await addDoc(colRef, {
            title,
            summary,
            category,
            createdat: new Date(),
            note: ""
        });

        setCreating(false)
        setTitle("")
        setSummary("")
        setCategory(categories[1].name)
        setOpen(false)
    }

    return (
        <Modal open={open} setOpen={setOpen} title={"New Note"}>
            <form className='flex flex-col gap-2'>
                <input value={title} onChange={e => setTitle(e.target.value)} className='w-full border-2 rounded-md text-base placeholder:text-sm px-2 border-black py-2' type="text" placeholder='New Note Title' />
                <textarea value={summary} onChange={e => setSummary(e.target.value)} className='w-full py-2 px-2 border-2 border-black rounded-md' rows="5" placeholder='What is this note about ...'></textarea>
                <select defaultValue={category}  value={category} onChange={e => setCategory(e.target.value)} className='w-full border-2 border-black rounded-md py-2 px-2'>
                    {
                        categories.slice(1).map((cat) => {
                            return (
                                <option key={cat.id} value={cat.name}>{cat.name}</option>
                            )
                        })
                    }
                </select>
                <Button disabled={title.length === 0 || summary.length === 0 || creating} onClick={AddNote} text={creating ? "Creating Note .." : "Create Note"} type='SOLIDINVERSE' />
            </form>
        </Modal>
    )
}

export default NewNote
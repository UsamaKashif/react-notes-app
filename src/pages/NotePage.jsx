import React, { useEffect, useRef, useState } from 'react'
import SideBar from '../components/SideBar'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../components/Button';
import { useNavigate, useOutletContext, useParams } from 'react-router';
import { deleteDoc, doc, getDoc, updateDoc } from '@firebase/firestore';
import { db } from '../firebase';
import NotFound from "./NotFound"
import Delta from 'quill-delta';

const NotePage = () => {
    const [value, setValue] = useState('');
    const [delta, setDelta] = useState(new Delta());
    const { user } = useOutletContext();
    const [saving, setSaving] = useState(false)
    const [data, setData] = useState({
        title: "",
        summary: "",
        category: ""
    })
    const [loadingNote, setLoadingNote] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate();

    const quillRef = useRef(null);


    const handleChange = (content, delta, source, editor) => {
        setDelta(editor.getContents());
    };

    useEffect(() => {
        const fetchNote = async () => {
            if (user) {
                console.log("fetching note")
                const noteRef = doc(db, "users", user.uid, "notes", id)
                const noteSnap = await getDoc(noteRef)
                console.log(noteSnap.exists())
                setLoadingNote(false)
                if (noteSnap.exists()) {
                    const data = noteSnap.data()
                    setDelta(new Delta(data.note))
                    // if (data.note && quillRef.current) {
                    //     quillRef.current.getEditor().setContents(data.delta);
                    //   }
                    setData({
                        title: data.title,
                        summary: data.summary,
                        category: data.category
                    })
                } else {
                    setValue(undefined)
                }
            }
        }
        fetchNote()
    }, [id, user])


    const handleSaveNote = async () => {
        setSaving(true)
        const noteRef = doc(db, "users", user.uid, "notes", id)
        await updateDoc(noteRef, {
            note: delta.ops,
        })
        setSaving(false)
    }

    const handleDeleteNote = async () => {
        const noteRef = doc(db, "users", user.uid, "notes", id)
        await deleteDoc(noteRef)
        navigate("/")
    }

    if (loadingNote) {
        return (
            <section className='col-span-12 flex items-center justify-center flex-col gap-3'>
                <p className='text-lg font-medium'>Loading Your Note ...</p>
                <div className='w-12 h-12 bg-transparent border-2 border-black border-dashed animate-spin rounded-full'></div>
            </section>
        )
    }
    if (value === undefined) {
        return (
            <section className='col-span-12'>
                <NotFound title='Sorry, no Note found' />
            </section>
        )
    }
    return (
        <>
            <SideBar sidebarBtnTitle='Delete Note' sideBarBtnOnClick={handleDeleteNote} >
                <div className='flex h-full justify-between flex-col'>
                    <section>
                        <h1 className='text-base lg:text-lg 2xl:text-xl break-all'>{data?.title}</h1>
                        <small>- {data?.category}</small>
                        <h3 className='mt-2'>What this note is about?</h3>
                        <p className='mt-2 break-all max-h-[220px] overflow-y-auto'>{data?.summary}</p>
                    </section>
                    <Button disabled={saving} onClick={handleSaveNote} text={saving ? "Saving ..." : "Save Note"} />
                </div>
            </SideBar>
            <ReactQuill className='w-full col-span-11 lg:col-span-9 h-full ' theme="snow" value={delta}
                onChange={handleChange} ref={quillRef} />
        </>
    )
}

export default NotePage
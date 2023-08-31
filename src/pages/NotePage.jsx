import React, { useState } from 'react'
import Layout from '../components/Layout'
import SideBar from '../components/SideBar'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../components/Button';

const NotePage = () => {
    const [value, setValue] = useState('');
    const handleSaveNote = () => {
        console.log(value);
    }
    return (
        <Layout>
            <SideBar sidebarBtnTitle='Delete Note' >
                <div className='flex h-full justify-between flex-col'>
                    <h1 className='text-base lg:text-lg 2xl:text-xl break-all'>This is the Post title</h1>
                    <Button onClick={handleSaveNote} text={"Save Note"} />
                </div>
            </SideBar>
            <ReactQuill className='w-full col-span-11 lg:col-span-9 h-full ' theme="snow" value={value} onChange={setValue} />
        </Layout>
    )
}

export default NotePage
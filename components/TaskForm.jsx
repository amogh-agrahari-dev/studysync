
import client from '../config/sanity';
import { Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState();
  const [realtedTo, setRelatedTo] = useState("");
  const [desc, setDesc] = useState("");
  const { data: session } = useSession();


  const handleSubmit = async() => {
    
    const doc = {
      _type: 'tasks',
      title: title,
      deadline: deadline,
      desc: desc,
      relatedTo: realtedTo,
      userEmail: session?.user?.email,
      done: false
    }
    try {
      
      await client.create(doc)
      alert("Added new Task")
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div className='max-w-sm rounded-xl mt-10  mx-auto bg-[#0f0f0f] text-white p-10'>
      <h1 className="text-4xl font-bold text-white text-center mb-7">ADD A TASK</h1>
      <div className='flex flex-col'>
      <span className='text-xl font-semibold text-center mb-4'>Add the Title of Your Task</span>

      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title goes here' className='text-white mb-4 bg-transparent border-2 rounded-xl px-5 py-2 border-white outline-2 outline-blue-600' />

      </div>
      <div className='flex flex-col'>
      <span className='text-xl font-semibold text-center mt-4'>What Subject is Your task related</span>

      <input type="text" value={realtedTo} onChange={e => setRelatedTo(e.target.value)} placeholder='Related To' className='text-white mt-4 bg-transparent border-2 rounded-xl px-5 py-2 border-white outline-2 outline-blue-600' />

      </div>
      <div className='flex flex-col'>
      <span className='text-xl font-semibold text-center mt-4'>Add Your Task Descripiton</span>

      <input type="text" value={desc} onChange={e => setDesc(e.target.value)} placeholder='Description' className='text-white mt-4 bg-transparent border-2 rounded-xl px-5 py-2 border-white outline-2 outline-blue-600 mb-4' />

      </div>
      <div className='flex flex-col items-center'>
        <span className='text-xl font-semibold text-center'>Select The Deadline of Your Task</span>
        <input value={deadline} onChange={e => setDeadline(e.target.value)} type="datetime-local" placeholder='Deadline' name="Deadline"  id="" className='text-white bg-transparent border-2 rounded-xl px-5 py-2 w-full mt-4 outline-blue-600 outline-2 mb-4 ' />
        
      </div>
      
      <button color='primary' variant='contained' className='w-full mt-4 bg-blue-600 px-5 py-2 rounded-full text-lg font-bold' onClick={(e) => handleSubmit(e)}>ADD TASK</button>
    </div>
  )
}

export default TaskForm

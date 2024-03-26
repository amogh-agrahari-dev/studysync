import BottomNav from '@/components/BottomNav';
import Navbar from '@/components/Navbar';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import "../../app/globals.css"
import TaskForm from '@/components/TaskForm';
import TasksDisplay from '@/components/TasksDisplay';
const Tasks = () => {
  const { data: session } = useSession();
  const navigate = useRouter()

  const [focus, setFocus] = useState(false)

  useEffect(() => {
    if (!session) {
      navigate.push("/auth/login")
    }
  }, [session])
  return (
    <div>
      <Head>
        <title>Study Sync</title>
      </Head>
      <div className='bg-black text-white'>
        <div>
          <Navbar />
        </div>
        <div className='flex my-28 flex-col items-center'>
          <div className='flex items-center text-white space-x-7 bg-gray-950 px-4 py-2 rounded-full'>
            {focus ? (
              <>
                <span className='bg-blue-600 px-5 py-2 duration-300 rounded-full ' onClick={() => setFocus(true)}>Add Tasks</span>
                
              </>
            ) : (
              <span className='px-5 py-2 rounded-full duration-300' onClick={() => setFocus(true)}>Add Tasks</span>

            )}
            {focus ? (
              <>
                
                <span className=' px-5 py-2 rounded-full duration-300' onClick={() => setFocus(false)}>  View Tasks</span>
              </>
            ) : (
              <span className='bg-blue-600 px-5 py-2 rounded-full duration-300' onClick={() => setFocus(false)}>View Tasks</span>

            )}
          </div>
          {focus ? (<TaskForm />) :(<TasksDisplay />)}

        </div>
        <div className=''>
          <BottomNav />
        </div>
      </div>
    </div>
  )
}

export default Tasks

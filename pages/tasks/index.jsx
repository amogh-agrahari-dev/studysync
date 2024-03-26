import BottomNav from '@/components/BottomNav';
import Navbar from '@/components/Navbar';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Tasks = () => {
  const { data: session } = useSession();
 const navigate = useRouter()
  
  
  useEffect (() => {
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
        <div className='flex-1 my-20 '>
          
          
        </div>
        <div className=''>
          <BottomNav />
        </div>
      </div>
    </div>
  )
}

export default Tasks

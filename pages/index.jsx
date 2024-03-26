import React, { useEffect } from 'react'
import "../app/globals.css";
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import Banner from '@/components/Banner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


const Page = () => {
  const { data: session } = useSession();
 const navigate = useRouter()
   

  
  useEffect (() => {
    if (!session) {
      navigate.push("/auth/login")
    } else {
      
    }
  }, [session])

  return (
    <div>

      <Head>
        <title>Study Sync</title>
      </Head>
      <div className='bg-black text-white justify-between flex flex-col overflow-scroll'>
        <div>
          <Navbar />
        </div>
        <div className='flex-1 my-20 '>
          <Banner />
          
        </div>
        <div className=''>
          <BottomNav />
        </div>
      </div>
    </div>
  )
}

export default Page

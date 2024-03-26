import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { useSession } from 'next-auth/react';
const Banner = () => {
  const {data :session} = useSession();
  return (
    <div className='mx-5 rounded-xl bg-[#0f0f0f] text-white px-8 py-2 my-10'>

            <h1 className='text-2xl font-semibold mt-12'>Welcome, {session?.user?.name}</h1>
            <div className='flex flex-row flex-wrap items-center justify-between'>
              <div className='my-10 flex flex-col items-center'>
                <CircularProgress variant="determinate" size={100} value={95} />
                <span className='font-semibold text-lg mt-4'>95% Tasks Done</span>
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-lg mt-3 w-full px-6 py-1 rounded-lg mx-auto" >More</button>
              </div>
              <div className='my-10 flex flex-col items-center'>
                <CircularProgress variant="determinate" size={100} value={75} />
                <span className='font-semibold text-=lg mt-4'>75% Study-Time </span>
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-lg mt-3 w-full px-6 py-1 rounded-lg mx-auto" >More </button>


              </div>
            </div>
          </div>
  )
}
export default Banner
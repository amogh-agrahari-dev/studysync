import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const Navbar = () => {
  const {data :session} = useSession()
  return (
    <div className='fixed right-0 top-0 left-0 justify-between bg-[#0f0f0f] text-white flex items-center px-5 py-3'>
      <div className='flex items-center'>
        <img src="https://cdn-icons-png.flaticon.com/512/4515/4515017.png" className='h-14 rounded-full' alt="" />
        <h1 className='text-3xl font-bold'>StudySync</h1>
      </div>
      <div className='flex items-center justify-between'>
        <img src={session?.user?.image} className='h-12 rounded-full mr-2' alt="" />
        {/* <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-xl w-full px-4 py-1 rounded-lg mx-auto" onClick={() => signOut()}>LOGOUT</button> */}
        
      
      
      </div>
    </div>
  )
}

export default Navbar

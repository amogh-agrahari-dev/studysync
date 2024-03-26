import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import "../../app/globals.css" 
import Head from 'next/head';
import { useRouter } from 'next/router';
const Login = () => {
  const { data: session } = useSession();
 const navigate = useRouter()
  const loginHandler = () => {
    signIn();

  }
  
  useEffect (() => {
    if (session) {
      navigate.push("/")
    }
  }, [session])
  return (
    <div className='max-w-[24rem] mx-auto max-h-screen my-auto mt-24 bg-black text-white'>
      <Head>
      <title>StudySync | Login</title>
    </Head>
    <div className='bg-[#0f0f0f] text-white p-10 rounded-xl flex flex-col justify-center'>
      <img className='rounded-full w-60 h-60 text-center mx-auto mb-2' src="https://cdn-icons-png.flaticon.com/512/4515/4515017.png" alt="" />
      <span className="text-4xl mb-5 font-bold text-center" >STUDYSYNC</span>
      <span className="text-2xl font-bold text-center" >The Only Productivity App You Need</span>
      <div className='mt-5 mx-auto'>
      <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-2xl w-full px-8 py-2 rounded-lg mx-auto" onClick={() => loginHandler()}>Sign In With Google</button>
    </div>
    </div>
    
    </div>
   
  )
}

export default Login;

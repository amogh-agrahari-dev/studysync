import React from 'react'
import { UserGroupIcon, BookOpenIcon, DocumentCheckIcon, ClockIcon, HomeIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import Link from 'next/link'


const BottomNav = () => {
  const { data: session } = useSession()
  return (
    <div className='fixed bottom-0 left-0 right-0 justify-between bg-[#0f0f0f] text-white flex items-center px-5 py-3'>

      <div className='flex flex-col items-center'>

        <UserGroupIcon className='h-7' />
        <span>
          Community

        </span>
      </div>
      <div className='flex flex-col items-center'>
        <Link href={`/notes`}>
          <BookOpenIcon className='h-7' />
          <span>
            Notes

          </span>
        </Link>
      </div>
      <Link href={`/`}>
        <div className='flex flex-col items-center'>
          <HomeIcon className='h-7' />
          <span className='text-center'>
            Home

          </span>
        </div>
      </Link>
      <Link href={`/tasks`}>
        <div className='flex flex-col items-center'>
          <DocumentCheckIcon className='h-7' />
          <span>
            Tasks

          </span>
        </div>
      </Link>
      <div className='flex flex-col items-center'>

        <ClockIcon className='h-7' />
        <span>
          Study Time

        </span>
      </div>
    </div>
  )
}

export default BottomNav

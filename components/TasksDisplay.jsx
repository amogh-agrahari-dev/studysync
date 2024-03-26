import client from '@/config/sanity';
import React, {  useState } from 'react'
import UpcomingTasks from './UpcomingTasks';
import DoneTasks from './DoneTasks';

const TasksDisplay = () => {
  
  const [focus, setFocus] = useState(true);
  return (

    <div className='mt-10 flex flex-col space-y-4 items-center'>
      
        <h1 className="text-2xl text-center mb-4">YOUR {focus ? "UPCOMING": "COMPLETED"} TASKS</h1>
        <div className='flex items-center justify-evenly text-white space-x-7 bg-gray-950 px-4 py-2 w-[20rem] rounded-full'>
            {focus ? (
              <>
                <span className='bg-blue-600 px-5 py-2 duration-300 rounded-full ' onClick={() => setFocus(true)}>Upcoming</span>
                
              </>
            ) : (
              <span className='px-5 py-2 rounded-full duration-300' onClick={() => setFocus(true)}>Upcoming</span>

            )}
            {focus ? (
              <>
                
                <span className=' px-5 py-2 rounded-full duration-300' onClick={() => setFocus(false)}>Completed</span>
              </>
            ) : (
              <span className='bg-blue-600 px-5 py-2 rounded-full duration-300' onClick={() => setFocus(false)}>Completed</span>

            )}
          </div>
        {focus ? (<UpcomingTasks />) : (<DoneTasks />)}
      </div>
    
  )
}

export default TasksDisplay



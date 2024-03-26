import client from '@/config/sanity';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';


const UpcomingTasks = () => {
    const [tasks, setTasks] = useState();
    const { data: session } = useSession();
    const getTasks = async (filterValue) => {
        const query = `*[_type == "tasks" && userEmail == $filterValue ]`;
        const res = await client.fetch(query, { filterValue })
        setTasks(res);
        console.log(tasks);
    }
    useEffect(() => {
        const filterValue = session?.user?.email || "amogh@gmail.com";
        getTasks(filterValue)
    }, [])
    return (
        <div>
            {tasks?.map((task) => (

                <div>
                    {!task?.done && (

                        <div className='text-white bg-[#0f0f0f] border-2  border-solid border-gray-500 duration-300 hover:bg-gray-950 px-5 py-3 my-4 min-w-[23rem] rounded-xl'>

                            <div className='text-xl font-bold flex items-center justify-between'>
                                <span className='capitalize'>  {task?.title.split("", 30)}..</span>
                                <span> <ArrowRightCircleIcon className='h-10 ' /> </span>

                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default UpcomingTasks

import React from 'react'


const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            <div className='flex-shrink-0 h-full w-[300px] bg-amber-300 rounded-xl'></div>
            <div className='flex-shrink-0 h-full w-[300px] bg-amber-300 rounded-xl'></div>
            <div className='flex-shrink-0 h-full w-[300px] bg-amber-300 rounded-xl'></div>
            <div className='flex-shrink-0 h-full w-[300px] bg-amber-300 rounded-xl'></div>
            <div className='flex-shrink-0 h-full w-[300px] bg-amber-300 rounded-xl'></div>

        </div>
    )
}

export default TaskList
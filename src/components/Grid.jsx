import React from 'react'

function Grid() {
  return (
    <>

    <div className='w-[30rem] h-[25rem] bg-red-500 grid grid-cols-3 grid-rows-3 gap-3'>
        <div className='bg-yellow-500  col-span-2 row-span-1'>01</div>
        <div className='bg-yellow-400'>02</div>
        <div className='bg-yellow-300'>03</div>
        <div className='bg-yellow-200'>04</div>
        <div className='bg-yellow-500'>05</div>
        <div className='bg-yellow-500'>06</div>
        

    </div>
        
    </>
  )
}

export default Grid
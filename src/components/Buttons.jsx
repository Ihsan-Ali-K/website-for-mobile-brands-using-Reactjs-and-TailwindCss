import React from 'react'

const Buttons = () => {
  return (
    <div className='flex gap-1 w-full h-[200px] items-center justify-center md:mt-10'>
        <button className='rounded p-2 h-[50px] w-[50px] bg-primary hover:bg-primary border'>1</button>
        <button className='rounded p-2 h-[50px] w-[50px] hover:bg-primary border'>2</button>
        <button className='rounded p-2 h-[50px] w-[50px] hover:bg-primary border'>3</button>
        <button className='rounded p-2 h-[50px] w-[50px] hover:bg-primary border'>4</button>
        <button className='rounded p-2 h-[50px] w-[50px] hover:bg-primary border'>5</button>
        <button className='rounded p-2 h-[50px] w-[50px] hover:bg-primary border'>6</button>
        <button className='rounded p-2 h-[50px] w-[50px] hover:bg-primary border'>7</button>
    </div>
  )
}

export default Buttons
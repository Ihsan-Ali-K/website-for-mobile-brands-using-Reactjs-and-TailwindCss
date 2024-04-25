import React from 'react'
import SideBar from './SideBar'
import Portfolio from './Portfolio'
import Buttons from './Buttons'

const Body = () => {
  return (
    <div className='w-full grid md:flex  mt-10'>
      <div className='w-full md:w-1/4 flex sm:flex-row flex-col md:flex-col bg-secondary p-5'>
        <SideBar />
      </div>
      <div className='flex  flex-col md:w-3/4'>
        <div className='h-[249px] flex items-center justify-between p-2'>
          <Portfolio />
        </div>
        <div className='md:mt-10 h-[249px] flex flex-row-reverse  items-center justify-center p-2'>
          <Portfolio />
        </div>
        <div className='md:mt-10 h-[249px] flex items-center justify-between p-2'>
          <Portfolio />
        </div>
        <div>
          <Buttons />
        </div>
      </div>
    </div>
  )
}

export default Body
import React from 'react'
import smallPhone from "../assets/smallphone.svg"
import Amazon from "../assets/amazon.svg"
import Facebook from "../assets/facebook.svg"
const SmallCard = () => {
  return (
    <div className='flex h-[100px] items-center '>
        <img src={smallPhone} />
        
        <div className='ml-2 grid gap-2'>
        <h3 className='font-bold'>Samsung S21</h3>
           <div className='flex'>
           <img src={Amazon} />
            <h6 className='text-[11px]'>23,999rs</h6>
            <img src={Facebook} className='ml-2'/>
            <h6 className='text-[11px]'>23,999rs</h6>
           </div>

        </div>
    </div>
  )
}

export default SmallCard
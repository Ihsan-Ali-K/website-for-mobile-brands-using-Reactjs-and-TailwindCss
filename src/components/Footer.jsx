import React from 'react'
import Logo from "../assets/logo.svg"
import icon1 from "../assets/social-icon1.svg"
import icon2 from "../assets/social-icon-2.svg"
import icon3 from "../assets/social-icon3.svg"
import icon4 from "../assets/social-icon4.svg"
const Footer = () => {
  return (
    <div className='w-full h-[300px]'>
    <div className='w-full h-[200px] flex justify-between mt-5 items-center flex-wrap md:flex-nowrap'>
      <div className='md:w-full'>
        <img src={Logo} />
        <p className='hidden md:block break-all  '>Take a deep breath, relax your fingers, and take it slow. You need to be focused and not annoyed when attempting the typing speed test. Take a deep breath, relax your fingers, and take it slow. You need to be focused and not annoyed when attempting the typing speed test. </p>
      </div>
      <div className='md:w-full flex  md:items-center justify-center '>
        <div className='flex md:flex-col flex-row gap-2'>
          <a href=' ' >Home</a>
          <a href=' ' >Compare</a>
          <a href=' ' >News</a>
          <a href=' ' >All Device</a>
        </div>
      </div>
      <div className='md:w-full flex justify-center items-center '>
        <div className='flex flex-col'>
          <a href='' className='text-primary '>Login</a>
          <a href='' className='text-primary'>SignUp</a>
          <div className='flex gap-3 mt-5'>
            <img src={icon1} className='cursor-pointer' />
            <img src={icon2} className='cursor-pointer' />
            <img src={icon3} className='cursor-pointer' />
            <img src={icon4} className='cursor-pointer' />
          </div>
        </div>
      </div>
  

    </div>
    <div className='border-t-4 border-primary h-[100px] '>
    <div className='w-full flex justify-between mt-3 flex-wrap'>
      <p>Copyright © 2024 Example. All rights reserved</p>
      <p>Privacy Terms</p>
      <p>Ihsan Web Dev</p>

    </div>
    </div>
   
    </div>
  )
}

export default Footer
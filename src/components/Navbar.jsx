import React, { useEffect, useRef, useState } from 'react'
import Logo from "../assets/logo.svg"
import icon1 from "../assets/social-icon1.svg"
import icon2 from "../assets/social-icon-2.svg"
import icon3 from "../assets/social-icon3.svg"
import icon4 from "../assets/social-icon4.svg"
import menu from "../assets/menu.png"
import Close from "../assets/close.svg"
import mobileBrands from './links'
const Navbar = () => {
    const navRef = useRef();
    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <div className='custom-gradient  w-full h-[100px] md:h-[150px] flex flex-col justify-around '>

            <div className='h-[50px] gap-2  w-full flex items-center justify-between md:mt-2'>
                <div className='flex w-full md:w-auto  justify-between md:justify-normal'>

                    <img src={Logo} />
                    <input type='text' className='h-[50px] rounded md:w-[350px] max-w-[350px] flex-1 focus:outline-none md:ml-3 text-primary p-2 'placeholder='search for products' />
                    <img src={menu} className='hover:shadow-xl cursor-pointer md:hidden' onClick={showNavbar} />
                </div>
                <div ref={navRef} className="nav md:flex md:w-full md:mr-auto  md:items-center md:gap-2 ">
                {/* */}
                <img src={Close} className=' size-[30px] hover:shadow-xl  my-5 cursor-pointer md:hidden' onClick={showNavbar} />
                    <a href='' className='hover:font-bold'>Home</a>
                    <a href='' className='hover:font-bold'>Compare</a>

                    <a href='' className='hover:font-bold'>News</a>
                    
                    <a href='' className='hover:font-bold'>All Device</a>
                
                    
                    <a href='' className='md:text-primary md:ml-auto hover:font-bold'>Login</a>
                    <a href='' className='md:text-primary hover:font-bold '>SignUp</a>
                    <img src={icon1} className='cursor-pointer' />
                    <img src={icon2} className='cursor-pointer' />
                    <img src={icon3} className='cursor-pointer' />
                    <img src={icon4} className='cursor-pointer' />



                </div>
            </div>
            <div className='hidden md:block'><h2 className='text-primary font-bold'>Mobile Brands</h2>
                <div className='flex flex-wrap justify-between '>
                    {
                        mobileBrands.map((item, index) => (
                            <a href='' >{item}</a>
                        ))
                    }
                    <a href='' className='text-primary' >See all</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
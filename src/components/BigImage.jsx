import React, { useEffect, useState } from 'react'
import BigImg from "../assets/big-image.png"
import mobileBrands from './links'
const BigImage = () => {
    const [smallerScreen, setSmallerScreen] = useState(window.innerWidth<640)

    useEffect(()=>{
     const handleResize = () =>{
        setSmallerScreen(window.innerWidth<640)
     }
     window.addEventListener("resize", handleResize)
     return()=>{
        window.removeEventListener("resize", handleResize)
     }
    },[])
    return (
        <div className='w-full flex flex-col sm:flex-row h-[300px] md:h-[400px] mt-3'>
            <div  >
            <h1 className='bg-secondary text-primary md:hidden hidden sm:block font-bold ml-4'>Popular Brands</h1>
           
            <div className='flex justify-between sm:grid grid-cols-2  rounded bg-secondary md:hidden sm:w-[200px] sm:h-full p-4 '>
           
                {  smallerScreen ? 
                mobileBrands.slice(0, 6).map((item, index)=>(
                    <a href='' >{item}</a>
                ))
                   : mobileBrands.map((item, index) => (
                        <a href='' >{item}</a>
                    ))
                }
                <a href='' className='text-primary' >See all</a>

            </div>
            </div>
           
            <div className='w-full h-full relative'>
                <img src={BigImg} className='w-full h-full ' />
                <div className='absolute bottom-0 p-3'>
                    <h2 className='text-[12px] md:text-[28px] p-2 bg-textBg  font-bold '>Digit Zero1 Awards and Best Buy Awards 2023: Best Performing Budget Smartphone (Under ₹20K)</h2>
                </div>
            </div>

        </div>
    )
}

export default BigImage
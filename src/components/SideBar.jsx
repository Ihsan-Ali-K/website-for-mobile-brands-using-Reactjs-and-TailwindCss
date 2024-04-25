import React from 'react'
import mobileBrands from './links'
import SmallCard from './SmallCard'
import Buttons from './Buttons'

const SideBar = () => {
    const products = [{
        name: "Samsun Galaxy A25",
        date: "Dec 15"
    },
    {
        name: "Samsun Galaxy A25",
        date: "Dec 15"
    },
    {
        name: "Samsun Galaxy A25",
        date: "Dec 15"
    },
    {
        name: "Samsun Galaxy A25",
        date: "Dec 15"
    },
    {
        name: "Samsun Galaxy A25",
        date: "Dec 15"
    },
    {
        name: "Samsun Galaxy A25",
        date: "Dec 15"
    },
    {
        name: "Samsun Galaxy A25",
        date: "Dec 15"
    },
    ]
    return (

        <>
            <div className='flex flex-col gap-2 sm:text-[11px] md:text-[16px]  '>
                <h2 className='font-bold text-primary text-[20px] my-3'>This month Releases</h2>
                {products.map((item, index) => (
                    <div className='flex sm:w-[150px] md:w-full justify-between'>
                        <a href=' ' >{item.name}</a>
                        <a href=''>{item.date}</a>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-2 md:mt-10 sm:text-[12px] md:text-[16px] '>
                <h2 className='font-bold text-primary text-[20px] my-3'>Popular Comparison</h2>
                {mobileBrands.slice(0, 8).map((item, index) => (
                    <div className='flex sm:w-[150px] md:w-full flex-row justify-between flex-nowrap'>
                        <h1 >{item}</h1>
                        <h1>VS</h1>
                        <h1 >{item}</h1>

                    </div>
                ))}
            </div>
            <div className='md:mt-10  sm:w-[200px] '>
                <h1 className='text-primary font-bold text-[20px] my-3'>Best under 1000$</h1>
               <div className='flex md:flex-col'>
               <div>
                <SmallCard  />
                <SmallCard  />
                </div>
                <div className='sm:hidden md:block'>
                <SmallCard />
                <SmallCard />
                </div>
              
               
                </div>
            </div>


        </>
    )
}

export default SideBar
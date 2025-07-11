import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 py-10 border-b border-gray-500/50 text-gray-500'>

            <div>
                <img src={assets.logo} alt="" className='w-32 sm:w-44' />
                <p className='max-w[410px] mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium repellendus reiciendis, aperiam optio nostrum 
                    numquam cumque qui quis dolores eos delectus, esse non nam? Quaerat in error ea facilis itaque.</p>
            </div>

            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                {footer_data.map((section, index) =>(
                    <div key={index}>
                        <h3>{section.title}</h3>
                        <ul>
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className='text-sm text-gray-500/80 hover:text-gray-700 cursor-pointer transition-all my-2'>
                                    <a href="#" className='hover:underline transition'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) )}
            </div>
        </div>
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2025 @ QuickBlog GreatStack - All Right Reserved.</p>
    </div>
  )
}

export default Footer
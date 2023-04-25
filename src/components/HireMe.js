import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify center overflow-hidden
     md:right-0 md:left-auto md:top-0 md:bottom-auto md:absolute sm:!right-0
    '>
        <div className='pb-14 pr-4 w-40 h-auto flex items-center justify-center relative md:w-32 md:!pb-7 '>
            <CircularText className={'fill-dark animate-spin-slow dark:fill-light'}/>
            <Link href='mailto:kmuturierick@gmail.com ' className='flex items-center justify-center absolute left-1/5 top-1/3 -translate-y-1/3
            bg-dark text-light shadow-md border border-solid borde-ddark w-20 h-19 rounded-full font-semibold hover:bg-blue
             dark:bg-light dark:text-dark hover:dark:bg-blue hover:dark:text-light hover:dark:border-light md:w-14 md:h-14 md:text-[10px]
             '>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe
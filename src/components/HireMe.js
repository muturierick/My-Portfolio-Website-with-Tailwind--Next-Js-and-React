import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify center overflow-hidde '>
        <div className='pb-14 pr-4 w-40 h-auto flex items-center justify-center relative'>
            <CircularText className={'fill-dark animate-spin-slow'}/>
            <Link href='mailto:kmurierick@gmail.com ' className='flex items-center justify-center absolute left-1/5 top-1/3 -translate-y-1/3
            bg-dark text-light shadow-md border border-solid borde-ddark w-20 h-19 rounded-full font-semibold hover:bg-blue'>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe
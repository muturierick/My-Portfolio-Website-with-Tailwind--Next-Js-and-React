import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { LinkArrow } from './Icons'
import PopUp from './Popup'

const Footer = () => {
    const text = "+254758817090";
  return (    
    <footer className='w-full border-t-2 border-solid border-dark 
    font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <h1 className='flex items-center ' onClick={() => {
                navigator.clipboard.writeText(text);
                <PopUp/>
                }}>Contact me at&nbsp; <span className='underline underline-offset-2'>+254758817090</span></h1>
            {/* <div className='flex items-center'>
                Built by&nbsp; <Link href="/" className='underline underline-offset-2'> Erick Muturi</Link>

            </div> */}
            <Link href="mailto:kmuturierick@gmail.com" target={'_blank'} 
                className='ml-4 text-lg font-medium capitalize text-dark underline'
                >Email Me
            </Link>
  
        </Layout>
    </footer>
  )
}

export default Footer
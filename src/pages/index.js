import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/desktop-pic.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Muturi Erick</title>
        <meta name="description" content="Introduction to Erick Muturi CEO Of Luku Green and Arifa Africa" />        
      </Head>
     <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-3/7'>
              
              <Image src={profilePic} alt='Erick Muturi' className='w-full h-auto'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-5xl !text-left'/>
              <p className='my-4 text-base font-medium'>
                 As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                 Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 '>
                <Link href="/dummy.pdf" target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-blue hover:text-light
                border-2 border-solid border-transparent hover:border-transparent'
                download={true}
                >Resume
                <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                 <Link href="mailto:kmuturierick@gmail.com" target={'_blank'}
                  className='ml-1 flex items-center bg-light text-dark p-2.5 px-7 rounded-lg text-lg font-semibold hover:bg-blue hover:text-light
                   border-2 border-solid border-dark hover:border-light'
                  download={true}
                  >HireMe
                <LinkArrow className={"w-6 ml-1"}/>
                </Link>
               
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt="Erick Muturi" className='w-full h-auto'/>
        </div>
     </main>
      </>
  )
}

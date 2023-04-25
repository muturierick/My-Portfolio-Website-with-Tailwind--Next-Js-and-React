import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/desktop-pic.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Muturi Erick</title>
        <meta name="description" content="Introduction to Erick Muturi CEO Of Luku Green and Arifa Africa, a free lancer, developer, actor, blogger and writer
        Erick Muturi's Professional Portfolio: Showcasing Web Design, Graphic Design, Software development Expertise.
         Explore a diverse collection of creative projects, client testimonials, and industry insights. 
         Contact for freelance opportunities and collaborations" />        
      </Head>
      <TransitionEffect/>
     <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8 lg:!pt-0'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-3/7 md:w-full'>
              
              <Image src={profilePic} alt='Erick Muturi' className='w-full h-auto lg:hidden md:inline-block md:w-full' 
              priority
              sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center !lg:pt-0'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-5xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl '/>
              <p className='my-4 text-base font-medium md:text-small sm:text-xs'>
                 As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                 Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center '>
                <Link href="/dummy.pdf" target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-blue hover:text-light
                border-2 border-solid border-transparent hover:border-transparent dark:bg-light dark:text-dark hover:dark:bg-blue hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base'
                download={true}
                >Resume
                <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                 <Link href="mailto:kmuturierick@gmail.com" target={'_blank'}
                  className='ml-1 flex items-center bg-light text-dark p-2.5 px-7 rounded-lg text-lg font-semibold hover:bg-blue hover:text-light
                   border-2 border-solid border-dark hover:border-light md:p-2 md:px-4 md:text-base'
                  download={true}
                  >HireMe
                <LinkArrow className={"w-6 ml-1"}/>
                </Link>
               
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden xl:w-20 xl:h-18'>
          <Image src={lightBulb} alt="Erick Muturi" className='w-full h-auto '/>
        </div>
     </main>
      </>
  )
}

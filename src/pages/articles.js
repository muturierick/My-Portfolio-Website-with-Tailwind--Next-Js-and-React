import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const articles = () => {
  return (
    <>
         <Head>
            <title>Erick Muturi | Articles Page </title>
            <meta name="description" content='All about articles written by Erick Muturi'></meta>
        </Head>
        <main>
            <Layout className='pt-16'>
                <AnimatedText text = "Words Can Change The World! " className='mb-16'/>
            </Layout>
        </main>
    </>
  )
}

export default articles
import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

export default function App({ Component, pageProps }) {
  return(
    <>
    <header>       
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </header>
    <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </main>
    </>);    
}

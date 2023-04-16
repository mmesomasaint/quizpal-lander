import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiArrowSmRight } from 'react-icons/hi'

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto Templates</title>
        <meta name='description' content='Convert texts to quizzes with ease' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='fixed top-0 left-0 right-0 px-2'>
        <div className='w-full h-full py-3 lg:py-5 bg-white border-b border-gray-200 flex justify-between lg:justify-start items-center gap-4'>
          <Image src='/logo.png' width={30} height={30} alt='logo' />
          <div className='flex justify-between items-center gap-4 w-fit lg:w-full'>
            <div className='flex flex-grow justify-between gap-10 items-center'>
              <div className='lg:hidden bg-black py-2 px-3 rounded-md'>
                <GiHamburgerMenu className='text-base lg:text-xl text-white' />
              </div>
              <div className='hidden lg:flex justify-evenly items-center gap-4'>
                <span className='font-bold text-sm lg:text-base '>
                  <Link href='/'>Quizpal</Link>
                </span>
                <span className='font-bold text-sm lg:text-base '>
                  <Link href='/'>Product</Link>
                </span>
                <span className='font-bold text-sm lg:text-base '>
                  <Link href='/'>Download</Link>
                </span>
                <span className='font-bold text-sm lg:text-base '>
                  <Link href='/'>Solutions</Link>
                </span>
                <span className='font-bold text-sm lg:text-base '>
                  <Link href='/'>Resources</Link>
                </span>
                <span className='font-bold text-sm lg:text-base '>
                  <Link href='/'>Pricing</Link>
                </span>
              </div>
              <div className='hidden sm:flex justify-start items-center gap-5'>
                <span className='font-bold text-sm lg:text-base '>
                  Request a demo
                </span>
                <span className='font-light text-sm lg:text-base'>|</span>
                <span className='font-bold text-sm lg:text-base'>Login</span>
              </div>
            </div>
            <div className='flex justify-start items-center gap-4'>
              <button className='text-sm sm:text-base font-bold leading-none py-2 px-3 bg-black text-white rounded-md'>
                Get Quizpal free
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className='mt-32'>
        <div className='text-center'>
          <h1 className='text-6xl md:text-8xl font-bold mb-6 w-[90%] sm:w-[85%] lg:w-[65%] mx-auto'>
            Draft, Share and Host your quiz with ease.
          </h1>
          <h3 className='text-xl md:text-3xl font-medium mb-6 w-[80%] sm:w-[55%] xl:w-[35%] mx-auto'>
            Quizpal is an online workshop for easier, effective quiz handling.
          </h3>
          <button className='inline-flex justify-start items-center gap-2 py-2 px-3 bg-black rounded-md'>
            <span className='text-sm sm:text-base font-bold leading-none text-white'>Get Quizpal free</span>
            <HiArrowSmRight className='text-base lg:text-xl text-white' />
          </button>
        </div>
      </main>
    </>
  )
}

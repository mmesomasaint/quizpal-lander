import Head from 'next/head'
import Image from 'next/image'
import { HiArrowSmRight } from 'react-icons/hi'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quizpal &#8211; Draft, share & host quiz. With ease.</title>
        <meta name='description' content='Convert texts to quizzes with ease' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <main className='mt-32'>
        <div className='text-center'>
          <h1 className='text-6xl md:text-8xl font-bold mb-6 w-[90%] sm:w-[85%] lg:w-[65%] mx-auto'>
            Draft, Share &amp; Host your quiz. With ease.
          </h1>
          <h3 className='text-xl md:text-3xl font-medium mb-6 w-[80%] sm:w-[55%] xl:w-[35%] mx-auto'>
            Quizpal is an online workshop for seamless, effective quiz handling.
          </h3>
          <button className='inline-flex justify-start items-center gap-2 py-2 px-3 bg-black rounded-md'>
            <span className='text-sm sm:text-base font-bold leading-none text-white'>Get Quizpal free</span>
            <HiArrowSmRight className='text-base lg:text-xl text-white' />
          </button>
        </div>
        <div className='w-fit mx-auto'>
          <Image src='/assets/all-happy.png' width={1200} height={1200} alt='happy students' />
        </div>
      </main>
    </>
  )
}

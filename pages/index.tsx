import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <main className=''>
      <>
        <Head>
          <title>Crypto Templates</title>
          <meta
            name='description'
            content='Convert texts to quizzes with ease'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <header className='fixed top-0 left-0 right-0 px-2'>
          <div className='w-full h-full border-b border-gray-400 flex justify-between items-center gap-4'>
            <div className='flex flex-grow justify-between gap-10 items-center py-5'>
              <div className='flex justify-start items-center gap-4'>
                <Image src='/logo.png' width={40} height={40} alt='logo' />
                <div className='flex justify-evenly items-center gap-4'>
                  <span className='font-bold text-xl '>
                    <Link href='/'>Quizpal</Link>
                  </span>
                  <span className='font-bold text-xl '>
                    <Link href='/'>Product</Link>
                  </span>
                  <span className='font-bold text-xl '>
                    <Link href='/'>Download</Link>
                  </span>
                  <span className='font-bold text-xl '>
                    <Link href='/'>Solutions</Link>
                  </span>
                  <span className='font-bold text-xl '>
                    <Link href='/'>Resources</Link>
                  </span>
                  <span className='font-bold text-xl '>
                    <Link href='/'>Pricing</Link>
                  </span>
                </div>
              </div>
              <div className='flex justify-start items-center gap-5'>
                <span className='font-bold text-xl '>Request a demo</span>
                <span className='font-light text-xl'>|</span>
                <span className='font-bold text-xl'>Login</span>
              </div>
            </div>
            <div className='flex justify-start items-center gap-4'>
              <button className='text-xl font-bold leading-none py-2 px-3 bg-black text-white rounded-md'>
                Get Quizpal free
              </button>
            </div>
          </div>
        </header>
      </>
    </main>
  )
}

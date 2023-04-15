import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return <main className=''>
    <>
      <header className='fixed top-0 left-0 right-0 px-2'>
        <div className='w-full h-full border-b border-gray-400 flex justify-between gap-10 items-center py-5'>
          <div className='flex justify-start items-center gap-4'>
            <Image src='/' width={40} height={40} alt='logo' />
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
          <div className='flex justify-start items-center'>
            <span>Request a demo </span>
          </div>
        </div>
      </header>
    </>
  </main>
}

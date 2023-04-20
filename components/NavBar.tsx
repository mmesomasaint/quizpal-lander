import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'

function NavBar() {
  const [showBottomBorder, setShowBottomBorder] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setShowBottomBorder(true)
      } else {
        setShowBottomBorder(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className='fixed top-0 inset-x-0 px-2'>
      <div
        className={`w-full h-full py-3 lg:py-5 bg-white ${
          showBottomBorder && 'border-b border-gray-200'
        } flex justify-between lg:justify-start items-center gap-4`}
      >
        <Image src='/logo.png' width={30} height={30} alt='logo' />
        <nav className='flex justify-between items-center gap-4 w-fit lg:w-full'>
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
        </nav>
      </div>
    </header>
  )
}

export default NavBar

import Head from 'next/head'
import Image from 'next/image'
import { HiArrowSmRight } from 'react-icons/hi'
import { FaRobot } from 'react-icons/fa'
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
            <span className='text-sm sm:text-base font-bold leading-none text-white'>
              Get Quizpal free
            </span>
            <HiArrowSmRight className='text-base lg:text-xl text-white' />
          </button>
        </div>
        <div className='w-fit mx-auto'>
          <Image
            src='/assets/all-happy.png'
            width={1200}
            height={1200}
            alt='happy students'
          />
        </div>
        <div className='w-full mt-10'>
          <div className='flex justify-center w-[70%] mx-auto items-end gap-3 mb-8'>
            <h3 className='w-[70%] text-center text-5xl font-extrabold leading-none'>
              Finally, an AI-powered quiz drafter, to save you more time
            </h3>
            <Image
              src='/assets/peep-ai-friend.png'
              width={150}
              height={150}
              alt='ai-friend'
            />
          </div>
          <div className='w-[90%] mx-auto grid grid-cols-2 place-items-center gap-10'>
            <div className='w-fit mt-4'>
              <Image
                src='/assets/ai-woman-listening.png'
                width={350}
                height={350}
                alt='AI drafter'
              />
            </div>
            <div className='mt-4'>
              <div className='mb-5'>
                <FaRobot className='text-5xl text-[#e4544c]' />
                <p className='text-3xl font-bold leading-tight mt-2'>
                  It's hard already to make quiz from a note. Increase speed
                  with quizpal.
                </p>
              </div>
              <div className='mt-6'>
                <p className='text-3xl font-semibold leading-tight text-[#e4544c]'>
                  Using the GPT-4, combined with DALL-E, the efficiency of this
                  AI is 90% accurate.
                </p>
              </div>
              <div className='mt-6'>
                <p className='text-2xl font-medium leading-tight text-gray-500'>
                  Our AI-powered feature is designed to make quiz creation a
                  breeze. It uses machine learning algorithms to analyze the
                  questions you've already written, and then suggests additional
                  questions that are similar in difficulty and style. This not
                  only saves you time, but it also ensures that your quizzes are
                  consistent and of high quality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-20'>
          <div className='flex justify-center w-[70%] mx-auto items-end gap-3 mb-8'>
            <h3 className='w-[70%] text-center text-5xl font-extrabold leading-none'>
              Create and Host quiz for any number of candidates
            </h3>
            <Image
              src='/assets/peep-host.png'
              width={150}
              height={150}
              alt='host'
            />
          </div>
        </div>
      </main>
    </>
  )
}

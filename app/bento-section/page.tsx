'use client'
import React from 'react'
import { motion, MotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import { FiArrowRight, FiMail, FiMapPin } from 'react-icons/fi'
import {
  SiFramer,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPerl,
  SiReact,
  SiTailwindcss,
  SiTiktok,
  SiX,
  SiYoutube,
} from 'react-icons/si'

const BentoSection = () => {
  return (
    <div className='bg-[#020617] min-h-screen px-4 py-12 text-zinc-50'>
      <motion.div
        initial='initial'
        animate='animate'
        transition={{
          staggerChildren: 0.05,
        }}
        className='mx-auto max-w-4xl grid grid-flow-dense grid-cols-12 gap-4'
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  )
}

type Props = {
  className?: string
} & MotionProps

const Block = ({ className, ...rest }: Props) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        'col-span-4 rounded-lg border border-zinc-700 bg-zinc-800/30 p-6',
        className
      )}
      {...rest}
    />
  )
}

// using tailwind merge, you are able to override the tailwind css for content that you wish the using to see
const HeaderBlock = () => {
  return (
    <Block className='col-span-12 row-span-2 md:col-span-6'>
      <Image
        className='mb-4 dark:invert'
        src='/svg/javascript.svg'
        width={56}
        height={56}
        alt='avatar'
      />
      <h1 className='mb-12 text-4xl font-medium leading-tight'>
        Hi, I&apos;m Benson.{' '}
        <span className='text-zinc-400'>
          I build cool websites like this one.
        </span>
      </h1>
      <a
        href='#'
        className='flex items-center gap-1 text-red-300 hover:underline'
      >
        Contact Me <FiArrowRight />
      </a>
    </Block>
  )
}

// using the whileHover and MotionProps we are able to pass framer motion props to enhance the UI and pass along animations
const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className='col-span-6 bg-red-500 md:col-span-3'
    >
      <a
        href='#'
        className='grid h-full place-content-center text-3xl text-white'
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className='col-span-6 bg-blue-500 md:col-span-3'
    >
      <a
        href='#'
        className='grid h-full place-content-center text-3xl text-white'
      >
        <SiX />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className='col-span-6 bg-green-500 md:col-span-3'
    >
      <a
        href='https://github.com/Benson-Craven'
        className='grid h-full place-content-center text-3xl text-white'
      >
        <SiGithub />
      </a>
    </Block>

    <Block
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className='col-span-6 bg-white md:col-span-3 '
    >
      <a
        href='#'
        className='grid h-full place-content-center text-3xl text-black'
      >
        <SiTiktok />
      </a>
    </Block>
  </>
)

const AboutBlock = () => {
  return (
    <Block className='col-span-12 text-3xl leading-snug'>
      <div className='flex flex-row mb-4 space-x-4'>
        <SiReact />
        <SiTailwindcss />
        <SiNextdotjs />
        <SiPerl />
        <SiNodedotjs />
        <SiMongodb />
        <SiFramer />
      </div>

      <p>
        <span className='text-zinc-400'>
          My passion is building cool things.
        </span>{' '}
        I build primarily with React, Next.js, Tailwind CSS, and Framer Motion.
      </p>
    </Block>
  )
}

const LocationBlock = () => {
  return (
    <Block className='col-span-12 flex flex-col items-center gap-4 md:col-span-3'>
      <FiMapPin className='text-3xl' />
      <p className='text-center text-lg text-zinc-400'>
        <span className='text-zinc-200'>Melbourne,</span> Australia
      </p>
    </Block>
  )
}

const EmailListBlock = () => {
  return (
    <Block className='col-span-12 md:col-span-9'>
      <p className='mb-3 text-lg'>Join my mailing list</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex items-center gap-2'
      >
        <input
          type='email'
          placeholder='Enter your email'
          className='w-full rounded border border-zinc-700 bg-inherit px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0'
        />
        <button
          type='submit'
          className='flex items-center gap-2 whitespace-nowrap bg-zinc-50 text-zinc-900 transition-colors hover:bg-red-300 hover:text-white rounded px-3 py-1.5'
        >
          <FiMail /> Join the list
        </button>
      </form>
    </Block>
  )
}

export default BentoSection

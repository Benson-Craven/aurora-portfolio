'use client'
import React from 'react'
import { CiSun } from 'react-icons/ci'
import { motion } from 'framer-motion'

const LandingHero = () => {
  return (
    <section className='min-h-screen bg-[#020617] '>
      <motion.div
        className='flex flex-col items-center justify-center min-h-screen'
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span className='group cursor-pointer mb-10 relative flex items-center gap-1.5 w-fit bg-gray-800/50 rounded-full px-4 py-2 text-sm '>
          Beta Now Live{' '}
          <CiSun className='transition-transform group-hover:-rotate-45 group-active:-rotate-12' />
        </span>

        <h1
          className='max-w-3xl bg-gradient-to-br from-white to-gray-400/60 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent
      sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight'
        >
          NexaFlow
        </h1>
        <p className='my-6 max-w-xl text-center text-base md:text-lg md:leading-relaxed'>
          Leverage scalable cloud-native solutions to streamline agile
          workflows, enhance user experience, and drive seamless integration for
          optimized performance.
        </p>
        <button className='mt-10 bg-gray-500 rounded-full px-4 py-2 hover:ring-4 ring-gray-200/20 duration-100'>
          Get started for free
        </button>
      </motion.div>
    </section>
  )
}

export default LandingHero

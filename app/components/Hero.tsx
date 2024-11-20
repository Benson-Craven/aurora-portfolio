'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className='w-full bg-black py-4 tracking-tight'>
      <div className='max-w-7xl mx-auto px-8 flex justify-between items-center'>
        <div className='text-emerald-300 font-medium text-lg'>NexaFlow</div>
        <ul className='flex space-x-8'>
          <li>
            <a
              href='#'
              className='text-gray-300 hover:text-white text-sm transition-colors'
            >
              Our Mission
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-300 hover:text-white text-sm transition-colors'
            >
              Services
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-300 hover:text-white text-sm transition-colors'
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const AnimatedBar = () => {
  const bars = [...Array(20)]

  return (
    <div className='w-full h-20 relative overflow-hidden bg-black'>
      <div className='absolute inset-0 flex'>
        {bars.map((_, i) => (
          <motion.div
            key={i}
            className='w-1 h-full bg-emerald-300'
            style={{ marginRight: '2px' }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: [1, 0.5, 1] }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}

const LandingPage = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }
  return (
    <div className='min-h-screen bg-black text-white flex flex-col justify-between'>
      <Navbar />

      <div className='mx-auto p-8'>
        <div className='grid grid-cols-3 gap-8 mb-16'>
          <div className='flex flex-col space-y-4'>
            <div className='text-sm font-mono'>ST/00</div>
            <AnimatedBar />
          </div>
        </div>

        <div className='flex justify-between items-center border-t border-gray-800 pt-4 mb-16'>
          <div className='text-sm text-gray-500'>©2024</div>
          <button
            onClick={scrollToNext}
            className='text-sm text-gray-300 hover:text-white transition-colors'
          >
            Discover ↓
          </button>
        </div>

        <h1 className='text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6'>
          The future of agile solutions.
        </h1>

        <h2 className='text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-gray-400'>
          Building advanced systems for tomorrow&#39;s challenges.
        </h2>
      </div>
    </div>
  )
}

export default LandingPage

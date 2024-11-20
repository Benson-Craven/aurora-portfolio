'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBar = () => {
  const bars = [...Array(25)] // Array for the bars

  return (
    <div className='w-full h-20 relative overflow-hidden bg-black'>
      <div className='absolute inset-0 flex'>
        {bars.map((_, i) => (
          <motion.div
            key={i}
            className='w-1 h-full bg-emerald-300'
            style={{ marginRight: '2px' }}
            initial={{ opacity: 0, scaleY: 0 }} // Start invisible and scaled down
            animate={{ opacity: 1, scaleY: 1 }} // Fully visible and scaled up
            transition={{
              duration: 0.2, // Animation duration for each bar
              delay: i * 0.05, // Sequential delay for loading effect
            }}
          />
        ))}
      </div>
    </div>
  )
}

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-black text-white p-8 flex flex-col justify-end'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-3 gap-8 mb-16'>
          <div className='flex flex-col space-y-4'>
            <div className='text-sm font-mono'>ST/00</div>
            <AnimatedBar />
          </div>

          <div className='flex flex-col space-y-4'>
            <div className='text-emerald-300 text-sm font-mono'>01. DATA</div>
            <div className='w-px h-20 bg-emerald-300/20' />
          </div>

          <div className='flex flex-col space-y-4'>
            <div className='text-emerald-300 text-sm font-mono'>02. TRUST</div>
            <div className='w-px h-20 bg-emerald-300/20' />
          </div>
        </div>

        <div className='flex justify-between items-center border-t border-gray-800 pt-4 mb-16'>
          <div className='text-sm text-gray-500'>©2024</div>
          <button className='text-sm text-gray-300 hover:text-white transition-colors'>
            Discover ↓
          </button>
        </div>

        <h1 className='text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6'>
          The future of agile solutions.
        </h1>

        <h2 className='text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-gray-400'>
          Building advanced systems for tomorrow's challenges.
        </h2>
      </div>
    </div>
  )
}

export default LandingPage

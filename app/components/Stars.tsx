'use client'
import React, { useEffect } from 'react'
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FiArrowRight } from 'react-icons/fi'

const colours = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

const AuroraHero = () => {
  const colour = useMotionValue(colours[0])
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, black 60%, ${colour})`
  const border = useMotionTemplate`1px solid ${colour}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${colour}`

  // Grabs the current date for the Footer component
  const d = new Date()
  let year = d.getFullYear()

  // Creates the loop of the colours array from when the page is mounted
  useEffect(() => {
    animate(colour, colours, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    })
  })

  return (
    <>
      <motion.section
        style={{
          backgroundImage,
        }}
        className='relative h-screen w-screen bg-black overflow-hidden'
      >
        <motion.div
          initial={{
            opacity: 0,
            // scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            margin: '-400px',
            once: true,
          }}
          transition={{
            duration: 1.5,
          }}
          className='relative z-10 flex flex-col items-center justify-center'
        >
          <h1 className='max-w-3xl text-center text-3xl font-medium leading-tight text-white sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight'>
            Decrease your SaaS overflow by over 90%
          </h1>
          <p className='my-6 max-w-xl text-center text-base md:text-lg md:leading-relaxed text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            aperiam inventore nostrum rerum alias magnam unde.
          </p>
          <motion.button
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            style={{
              border: border,
              boxShadow: boxShadow,
            }}
            className='group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-white transition-colors hover:bg-gray-950/50'
          >
            Start Free Trial
            <FiArrowRight className='transition-transform group-hover:-rotate-45 group-active:-rotate-12' />
          </motion.button>
        </motion.div>

        <div className='absolute inset-0 z-0'>
          <Canvas>
            <Stars
              radius={50}
              depth={150}
              count={2500}
              factor={4}
              saturation={0}
              fade
              speed={2}
            />
          </Canvas>
        </div>

        <footer className='min-w-screen mt-36 p-4 '>
          <div className='container hover:cursor-pointer mx-auto text-center text-gray-400'>
            <p>&copy; {year} Code by Benson. All rights reserved.</p>
            <div className='flex justify-center space-x-4 mt-4'>
              <a href='#' className='hover:text-white hover:cursor-pointer'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-white'>
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </motion.section>
    </>
  )
}

export default AuroraHero

'use client'
import React from 'react'
import { SparklesCore } from '@/components/ui/sparkles'

export function SparklesPreview() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='h-[50rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md'>
      {/* Main Heading */}
      <h1 className='mt-20 md:mt-0 text-6xl md:text-7xl xl:text-[20rem] font-medium tracking-tighter text-center text-white relative z-20'>
        NexaFlow
      </h1>

      {/* Sparkles Section */}
      <div className='relative w-full max-w-4xl h-40'>
        {/* Gradient Lines */}
        <div className='absolute inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
        <div className='absolute inset-x-20 top-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
        <div className='absolute inset-x-60 top-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm' />
        <div className='absolute inset-x-60 top-0 h-[5px] bg-gradient-to-r from-transparent via-sky-500 to-transparent' />

        {/* SparklesCore Component */}
        <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          particleColor='#FFFFFF'
          className='w-full h-full'
        />

        {/* Radial Mask */}
        <div className='absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
      </div>

      {/* Footer Section */}
      <div className='container relative z-10 mx-auto max-w-[1400px] px-6 tracking-tight'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-12'>
          {/* Sections */}
          {[
            {
              id: '01',
              title: 'Products',
              links: [
                { name: 'Products', href: '/products' },
                { name: 'Solutions', href: '/solutions' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Enterprise', href: '/enterprise' },
              ],
            },
            {
              id: '02',
              title: 'Company',
              links: [
                { name: 'About', href: '/about' },
                { name: 'Careers', href: '/careers' },
                { name: 'Blog', href: '/blog' },
                { name: 'Press', href: '/press' },
              ],
            },
            {
              id: '03',
              title: 'Social',
              links: [
                { name: 'Twitter', href: 'https://twitter.com' },
                { name: 'LinkedIn', href: 'https://linkedin.com' },
                { name: 'GitHub', href: 'https://github.com' },
                { name: 'Discord', href: 'https://discord.com' },
              ],
            },
            {
              id: '04',
              title: 'Contact',
              links: [
                {
                  name: 'hello@nexaflow.com',
                  href: 'mailto:hello@nexaflow.com',
                },
                { name: '+1 (234) 567-890', href: 'tel:+1234567890' },
              ],
            },
          ].map((section) => (
            <div key={section.id} className='md:col-span-3'>
              <div className='grid grid-cols-4 md:grid-cols-5'>
                <div className='col-span-1'>
                  <span className='block text-sm font-mono text-white opacity-40'>
                    {section.id} —
                  </span>
                </div>
                <div className='col-span-3 md:col-span-4'>
                  <div className='space-y-2'>
                    {section.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className='block text-sm text-white hover:opacity-50 transition-all duration-300'
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className='flex items-center justify-between pb-6'>
          <p className='text-sm text-white opacity-30'>
            © {new Date().getFullYear()} • NexaFlow. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className='inline-flex items-center text-white opacity-30 hover:opacity-100 transition-all duration-300'
          >
            <p className='text-sm'>Back to top</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 18'
              className='w-3 h-3 ml-4 -rotate-90'
            >
              <path
                fill='#ffffff'
                d='M13.033 4.84917C14.474 6.22658 16.1558 7.34426 18 8.15V9.87833C16.1569 10.6879 14.4754 11.8069 13.033 13.1839C11.8864 14.3419 11.2601 15.8942 11.2914 17.5H8.5427C8.5427 15.5419 9.02919 13.9678 10.0022 12.7778C11.0066 11.575 12.3802 10.7147 13.9232 10.3222V10.2278H0V7.78639H13.9281V7.64472C12.3863 7.26856 11.0109 6.41884 10.007 5.22222C9.03405 4.03537 8.54757 2.4613 8.54757 0.5H11.2962C11.2761 1.30638 11.4199 2.10871 11.7195 2.86111C12.0182 3.60124 12.4646 4.27684 13.033 4.84917Z'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

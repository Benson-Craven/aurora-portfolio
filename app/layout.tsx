import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react'
import { SparklesPreview } from './components/Footer'

export const metadata: Metadata = {
  title: 'NexaFlow',
  description: 'Agile solutions made simple.',
}

const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
  },
  {
    name: 'Our Mission',
    link: '/about',
    icon: <IconUser className='h-4 w-4 text-neutral-500 dark:text-white' />,
  },
  {
    name: 'Contact',
    link: '/contact',
    icon: <IconMessage className='h-4 w-4 text-neutral-500 dark:text-white' />,
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='bg-black scroll-smooth'>
        <Navbar navItems={navItems} />
        {children}
        <SparklesPreview />
      </body>
    </html>
  )
}

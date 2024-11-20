import React from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { CircleDot } from 'lucide-react'
import { CardSpotlight } from '@/components/ui/card-spotlight'

interface ProductCardProps {
  title: string
  category: string
  description: string
  number: string
  isComingSoon?: boolean
}

const ProductCard = ({
  title,
  category,
  description,
  number,
  isComingSoon,
}: ProductCardProps) => (
  <Card className={`relative ${isComingSoon ? 'bg-gray-100' : 'bg-white'}`}>
    <CardHeader className='space-y-1'>
      <div className='text-sm text-gray-500 uppercase tracking-wide'>
        {category}
      </div>
      <div className='flex items-center gap-2'>
        <CircleDot className='w-6 h-6' />
        <h3 className='text-2xl font-bold'>{title}</h3>
      </div>
    </CardHeader>
    <CardContent>
      <p className='text-gray-600'>{description}</p>
    </CardContent>
    <div className='absolute bottom-4 left-4 text-sm text-gray-400'>
      {number}
    </div>
    {isComingSoon && (
      <div className='absolute top-4 right-4 text-sm font-medium'>
        Coming soon
      </div>
    )}
  </Card>
)

const MissionSection = () => {
  return (
    <div className='min-h-screen bg-black text-white p-8'>
      <div className='h-[30vh]' />
      <div className='max-w-7xl mx-auto space-y-16'>
        {/* Mission Statement */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <h1 className='text-5xl font-medium tracking-tighter'>Our mission</h1>
          <p className='text-xl text-gray-300 tracking-tight'>
            Building next-generation AI solutions that are reliable, scalable,
            and accessible. Our suite of integrated products makes enterprise AI
            deployment simple and effective.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Card 1: Authentication */}
          <CardSpotlight className='h-96 w-96'>
            <p className='text-xl font-bold relative z-20 mt-2 text-white'>
              Secure Authentication
            </p>
            <div className='text-neutral-200 mt-4 relative z-20'>
              Protect your account with a secure and seamless sign-in process:
              <ul className='list-none mt-2'>
                <Step title='Enter your email address' />
                <Step title='Create a unique password' />
                <Step title='Enable two-factor authentication' />
                <Step title='Complete identity verification' />
              </ul>
            </div>
            <p className='text-neutral-300 mt-4 relative z-20 text-sm'>
              Your data security is our top priority. Follow these steps to
              ensure complete protection.
            </p>
          </CardSpotlight>

          {/* Card 2: Analytics */}
          <CardSpotlight className='h-96 w-96'>
            <p className='text-xl font-bold relative z-20 mt-2 text-white'>
              Advanced Analytics
            </p>
            <div className='text-neutral-200 mt-4 relative z-20'>
              Gain insights to optimize your performance:
              <ul className='list-none mt-2'>
                <Step title='Track real-time data' />
                <Step title='Monitor key metrics' />
                <Step title='Analyze customer behavior' />
                <Step title='Generate actionable reports' />
              </ul>
            </div>
            <p className='text-neutral-300 mt-4 relative z-20 text-sm'>
              Make informed decisions using our robust analytics dashboard.
            </p>
          </CardSpotlight>

          {/* Card 3: Customer Support */}
          <CardSpotlight className='h-96 w-96'>
            <p className='text-xl font-bold relative z-20 mt-2 text-white'>
              24/7 Customer Support
            </p>
            <div className='text-neutral-200 mt-4 relative z-20'>
              Get assistance anytime, anywhere:
              <ul className='list-none mt-2'>
                <Step title='Chat with support agents' />
                <Step title='Access a comprehensive help center' />
                <Step title='Resolve issues instantly' />
                <Step title='Receive personalized solutions' />
              </ul>
            </div>
            <p className='text-neutral-300 mt-4 relative z-20 text-sm'>
              We're here to ensure your experience is seamless and hassle-free.
            </p>
          </CardSpotlight>
        </div>
      </div>
      <div className='h-[30vh]' />
    </div>
  )
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className='flex gap-2 items-start'>
      <CheckIcon />
      <p className='text-white'>{title}</p>
    </li>
  )
}

const CheckIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='h-4 w-4 text-blue-500 mt-1 flex-shrink-0'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path
        d='M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z'
        fill='currentColor'
        strokeWidth='0'
      />
    </svg>
  )
}

export default MissionSection

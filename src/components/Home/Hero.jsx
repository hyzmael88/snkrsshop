import React from 'react'
import Image from 'next/image';
import Hero1 from '../../assets/hero1.jpg'
import Hero2 from '../../assets/hero2.jpg'
import Hero3 from '../../assets/hero3.jpg'

function Hero() {
  return (
    <div className='w-full h-full mt-2'>
    <div className='flex flex-row min-h-[5vh] gap-3 '>
      <Image src={Hero1} alt="jordan1" className='w-[33%] object-cover' />
      <Image src={Hero2} alt="jordan1" className='w-[33%] object-cover' />
      <Image src={Hero3} alt="jordan1" className='w-[33%] object-cover' />

    </div>
    </div>
  )
}

export default Hero
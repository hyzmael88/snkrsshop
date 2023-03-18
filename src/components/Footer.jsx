import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center w-full h-full mt-10'>

      <div className='flex flex-col'>
        <h4 className='font-bold text-center lg:text-start'>Sign up</h4>
        <div className='flex flex-col lg:flex-row w-full mt-2'>
          <input type="email" placeholder='Email' className='w-full lg:w-[370px] border-2 placeholder:text-center placeholder:lg:text-start' />
          <button className='uppercase bg-[#a8a8a8] w-full lg:w-[200px] py-2 border-2 font-bold '>subscribe</button>
        </div>
          <p className='text-sm text-gray-400'>Subscribe to our updates to keep up to date with all the events </p>

          <h1 className='mt-10 uppercase font-bold text-5xl mb-10 text-center lg:text-start'>Mis tennis</h1>
      </div>

      <div className='flex flex-col'>

      
      <div className='flex flex-cols-2 gap-5 font-semibold text-center lg:text-start mb-10 lg:mb-0'>
        <div>
          <ul>
            <li>Home</li>
            <li>For Him</li>
            <li>For Her</li>
            <li>Sale</li>
            <li>Magazine</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className='hidden lg:flex flex-col mt-10  '>
        <h6 className='font-semibold uppercase text-xs'>mis tennis</h6>
        <p className='uppercase text-[10px]'>privacy policy</p>
        <p className='uppercase text-[10px]'>terms and conditions</p>
      </div>
      
      </div>

    </div>
  )
}

export default Footer
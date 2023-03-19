import { useState } from 'react'



import Hero from '@/components/Home/Hero'
import About from '@/components/Home/About'
import New from '@/components/Home/New'
import Popular from '@/components/Home/Popular'
import Him from '@/components/Home/Him'
import Her from '@/components/Home/Her'
import Video from '@/components/Home/Video'
import Newseason from '@/components/Home/Newseason'
import Blog from '@/components/Home/Blog'


export default function Home() {
  return (


    <div className='2xl:max-w-[1280px] w-full h-full mx-auto overflow-hidden'>


      <Hero />
      <About />
      <New />
      <Popular />
      <Him />
      <Her />
      {/* <Video/> */}
      <Newseason />
      <Blog />



    </div>

  )
}

import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
  return (
 

<div className="w-full h-64 lg:h-[750px] relative mt-10">
<ReactPlayer
  url='https://www.youtube.com/watch?v=-ywgBdViA9k'
  className="absolute top-0 left-0 w-full h-full"
  width="100%"
  height="100%"
/>
</div>
  )
}

export default Video
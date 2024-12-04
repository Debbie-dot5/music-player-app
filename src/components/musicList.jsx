import React from 'react'

const MusicList = () => {
  return (
  <div className='px-6 w-full relative'>
    <h1 className='text-white text-lg font-bold'>Browse</h1>
    <div className='flex gap-4 items-start overflow-x-scroll no-scrollbar w-full'>
      
      <div className='flex-shrink-0 w-[140px] '>
       <img className='py-4' src='/img1.svg'/>
       <h3 className='font-bold text-white text-base'>CLEAR MIND</h3>
       <p className='text-gray-300 text-sm'>Instrumental</p>
      </div>

      <div className='flex-shrink-0 w-[140px]'>
       <img className='py-4' src='/img2.svg'/>
       <h3 className='font-bold text-white text-base'>URBAN MOOD</h3>
       <p className='text-gray-300 text-sm'>Hip-Hop</p>
      </div>

      <div className='flex-shrink-0 w-[140px]'>
       <img className='py-4' src='/img3.svg'/>
       <h3 className='font-bold text-white text-base'>SUMMER BLUES</h3>
       <p className='text-gray-300 text-sm'>Country</p>
      </div>

    </div>     


  </div>
  )
}

export default MusicList

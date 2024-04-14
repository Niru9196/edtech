import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonial = () => {
  return (
    <div className='h-[300px] w-[550px] bg-orange-400 rounded-3xl'>
      <div className='imageContainer flex justify-between items-center'>
        <div className='flex gap-5 px-6'>
          <div className='rounded-[50%] bg-white w-[150px] h-[150px] grid place-content-center overflow-hidden -mt-12 border-2 border-white'>
          <img src='testimonial.png' alt='profile picture of testimonial' className='w-[80px] object-cover ' />
          </div>
          <h1 className='text-2xl font-bold mt-16 text-white'>Nirupama Singh</h1>
        </div>
        
        <FormatQuoteIcon className='-mt-7 text-white' style={{fontSize: '60px'}} />
      </div>
      <div className='textContainer indent-40 px-9 text-justify'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi expedita ad iure neque optio consectetur, aliquid recusandae error, magni quisquam tenetur dicta, officia odio commodi. Commodi reiciendis recusandae suscipit natus.</p>
      </div>
    </div>
  )
}

export default Testimonial

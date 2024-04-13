import React from 'react'
import CategoryCard from './card component/CategoryCard'

const MainContent = () => {
  return (
        <div className=' h-[550px] flex items-center flex-col'>
            <h1 className='text-5xl mt-10 pt-5 font-bold w-[800px] text-center leading-snug'>Unlock Your Potential with SKOOL: Learn, Grow, Succeed!</h1>
            <p className='mt-10 text-xl font-semibold'>Get started as a</p>
            <div className='flex gap-6 mt-9'>
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </div>
            
        </div>
  )
}

export default MainContent

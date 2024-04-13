import React from 'react'
import CourseCard from './CourseCard'

const FeaturedCourses = () => {
  return (
    <div className=''>
      <h1 className='text-4xl font-bold align-left w-[1000px] m-auto'>Featured Courses</h1>
      <section className='flex gap-2 m-auto w-[1000px] justify-between mt-7'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>
    </div>
  )
}

export default FeaturedCourses

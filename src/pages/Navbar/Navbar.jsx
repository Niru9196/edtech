import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='flex justify-between h-[100px] w-screen px-9 overflow-x-hidden'>
            <div className='flex items-center '>
                <img src='/ninja.png' style ={{height: "130%"}}/>
                <h1 className='text-5xl text-blue-500 font-bold'>SKOOL</h1>
            </div>
            <div className='flex'>
                <ul className='flex items-center text-xl mr-24 gap-[80px]'>
                    <li className=''>Home</li>
                    <li>About</li>
                    <li>Courses</li>
                    <li>Blog</li>
                    <li>Login</li>
                    <li>SignUp</li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

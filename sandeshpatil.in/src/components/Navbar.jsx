import React from 'react'
import Projects from './Projects'
import About from './About'


const Navbar = () => {
  return (
    <> 
    <nav className='w-full px-5 flex '>       
       <h2>SP</h2>
       <Projects/>
       <About/>
    </nav>
    </>
  )
}

export default Navbar
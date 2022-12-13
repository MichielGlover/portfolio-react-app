import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-400'>Hallo, mijn naam is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Michiel Glover</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Ik ben een Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Ik ben een full-stack developer gespecialiseerd in het bouwen (en soms
          het ontwerpen) van uitzonderlijke digitale ervaringen. Momenteel richt ik me op
          het bouwen van responsive full-stack webapplicaties.
        </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-400'>Werk bekijken
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
        </div>
    </div>

    </div>
  )
}

export default Home
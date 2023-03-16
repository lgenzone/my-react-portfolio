import React from 'react'
import bringPopcorn from '../assets/bringPopcorn.png'
import getFit from '../assets/getFit.png'

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full m:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p py-6>Check out some of my recent projects</p>
            </div>

            {/* container */}
            <div className='gird sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* grid item */ }
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${bringPopcorn})` }}>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Bring Popcorn - A Movie Search Website</span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/NBADRAUN/Bring-Popcorn/deployments/activity_log?environment=github-pages'><button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                            <a href='https://github.com/NBADRAUN/Bring-Popcorn'><button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github Repo</button></a>
                        </div>
                    </div>
                </div>
                {/* grid item */ }
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ backgroundImage: `url(${getFit})` }}>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>Front End Application</span>
                        <div className='pt-8 text-center'>
                            <a href='/'><button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Website</button></a>
                            <a href='/'><button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github URL</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio

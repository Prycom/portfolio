import React from 'react';
import left from './static/left.svg';
import right from './static/right.svg'
import TypeIt from 'typeit-react';

/*
TODO: slider component for portfolio, stack, experience
TODO: pricing module
TODO: contacts to tg

1 OneByOne C# (our publishers.../projects)
2 Sber (frontend/ds validation)
3 ML specialist (now)

*/

function App() {
  return (
    <div className='flex flex-row flex-wrap justify-around gap-4 w-full h-full px-2 pb-4'>

      {/* Header */}
      <div className='header flex h-24 w-full sticky top-0 left-0 md:bg-white'>
        <div className='navbar flex flex-row border-b-2 border-black w-full items-center justify-around'>
          <a href='portfolio' className='hover:underline underline-offset-4'>Portfolio</a>
          <a className='hover:underline underline-offset-4'>About me</a>
          <a className='hover:underline underline-offset-4'>Pricing</a>
          <a className='border-2 border-black px-2 rounded md:px-4 md:py-1
           shadow-[5px_5px_rgba(0,0,0,1)] transition-all ease-in-out delay-50 hover:shadow-none duration-300'
          >Contacts</a>
        </div>
      </div>

      {/* Introduce card */}
      <div className='wrapper flex flex-col h-80 w-full border-2 bg-black border-black'>
        <div className='flex flex-row w-full h-full bg-orange-500 rounded px-2 py-2'>
          <div className='left_part flex flex-col h-full w-1/2'>
            <div className='flex flex-col my-auto border-r-2 border-black justify-center gap-1'>
              <TypeIt className='text-right' options={{cursor: false}}><span className='text-3xl text-right font-mono'>
                Let me<br />introduce<br />
                <span className='underline'>myself</span>
                </span>
              </TypeIt>
            </div>
          </div>
          <div className='right-part flex flex-col justify-center h-full w-1/2'>
            <TypeIt options={{startDelay:3000, cursor:false}}><span className='text-4xl font-bold'>I'm</span></TypeIt>
            <TypeIt options={{startDelay:3500, cursor:false}}><span className='text-6xl font-bold'>Lexey</span></TypeIt>
          </div>
        </div>
      </div>

      {/* Works card */}
      <div className='wrapper flex flex-col h-80 w-full border-2 bg-black border-black md:w-80'>
        <div id='portfolio' className='flex flex-col w-full h-full bg-purple-500 rounded px-2 py-2'>
          <span className='text-2xl'>Here are some of my <span className='underline'>works:</span></span>
          <div className='works_content flex flex-row h-full w-full'>
            <div className='left_part flex h-full w-1/5'>
              <img src={left} className='transition-all ease-in-out delay-50 duration-200 hover:scale-150' />
            </div>
            <div className='middle_part flex h-full w-full'>

            </div>
            <div className='right_part  flex h-full w-1/5'>
              <img src={right} className='transition-all ease-in-out delay-50 duration-200 hover:scale-150' />
            </div>
          </div>
        </div>
      </div>

      {/* Stack card */}
      <div className='wrapper flex flex-col h-80 w-full border-2 bg-black border-black md:w-80'>
        <div id='stack' className='stack flex flex-col w-full h-full bg-white rounded px-2 py-2'>
          <span className='text-2xl'>My stack:</span>
          <div className='works_content flex flex-row h-full w-full'>
            <div className='left_part flex h-full w-1/5'>
              <img src={left} className='transition-all ease-in-out delay-50 duration-200 hover:scale-150' />
            </div>
            <div className='middle_part flex h-full w-full'>

            </div>
            <div className='right_part  flex h-full w-1/5'>
              <img src={right} className='transition-all ease-in-out delay-50 duration-200 hover:scale-150' />
            </div>
          </div>
        </div>
      </div>

      {/* Stack card */}
      <div className='wrapper flex flex-col h-80 w-full border-2 bg-black border-black md:w-80'>
        <div id='stack' className='stack flex flex-col w-full h-full bg-white rounded px-2 py-2'>
          <span className='text-2xl'>Work experience:</span>
            <div className='works_content flex flex-row h-full w-full'>
            <div className='left_part flex h-full w-1/5'>
              <img src={left} className='transition-all ease-in-out delay-50 duration-200 hover:scale-150' />
            </div>
            <div className='middle_part flex h-full w-full'>

            </div>
            <div className='right_part  flex h-full w-1/5'>
              <img src={right} className='transition-all ease-in-out delay-50 duration-200 hover:scale-150' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
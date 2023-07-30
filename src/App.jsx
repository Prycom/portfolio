import React, { useState } from 'react';
import TypeIt from 'typeit-react';
import left from './static/left.svg';
import right from './static/right.svg'
import frontend from './static/frontend.svg'
import unity from './static/unity.svg'
import ml from './static/ml.svg'
import games from './static/games.svg'

/*
TODO: pricing module
TODO: contacts to tg

1 OneByOne C# (our publishers.../projects)
2 Sber (frontend/ds validation)
3 ML specialist (now)

*/

// Some mocks

let stackSlides = [
  {
    title: 'Frontend',
    desc: 'HTML, CSS, JS. ReactJS, NextJS, SvelteKit, MobX',
    img: frontend
  },
  {
    title: 'C#/Unity',
    desc: 'ML agents, ECS, core mechanics, high performance systems',
    img: unity
  },
  {
    title: 'Machine Learning',
    desc: 'Python, ML flow, torch, Tensorflow',
    img: ml
  }
]

let experienceSlides = [
  {
    title: 'C# gamedev',
    desc: 'I started game development since the end of 2021. Under my leadership, my team finished 7 projects',
    img: games
  }
]

const Carousel = ({ options }) => {
  const [idx, setIdx] = useState(0)
  const leftClick = () => idx === 0 ? setIdx(options.length - 1) : setIdx(idx - 1)
  const rightClick = () => idx + 1 === options.length ? setIdx(0) : setIdx(idx + 1)
  return (
    <div className='works_content flex flex-row h-full w-full'>
      <div className='left_part flex h-full w-16'>
        <img src={left} className='transition-all ease-in-out delay-50 duration-200 hover:scale-150' onClick={leftClick} />
      </div>
      <div className='middle_part flex flex-col gap-2 h-full w-full py-2'>
        <span className='text-xl text-center'>{options[idx].title}</span>
        <img src={options[idx].img} className='h-20 object-contain' />
        <div className=''>
        {options[idx].desc}
        </div>
      </div>
      <div className='right_part flex h-full w-16'>
        <img src={right} className='transition-all ease-in-out delay-50 duration-200 hover:scale-150' onClick={rightClick} />
      </div>
    </div>
  )
}

const Card = ({ title, options, width='w-80', bg='bg-white' }) => {
  return (
    <div className={`wrapper flex flex-col h-80 w-full border-2 bg-black border-black md:${width}`}>
      <div className={`flex flex-col w-full h-full ${bg} rounded px-2 py-2`}>
        <div className='flex text-2xl'>{title}</div>
        <Carousel options={options} />
      </div>
    </div>
  )
}

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
              <TypeIt className='text-right' options={{ cursor: false }}><span className='text-3xl text-right font-mono'>
                Let me<br />introduce<br />
                <span className='underline'>myself</span>
              </span>
              </TypeIt>
            </div>
          </div>
          <div className='right-part flex flex-col justify-center h-full w-1/2'>
            <TypeIt options={{ startDelay: 3000, cursor: false }}><span className='text-4xl font-bold'>I'm</span></TypeIt>
            <TypeIt options={{ startDelay: 3500, cursor: false }}><span className='text-6xl font-bold'>Lexey</span></TypeIt>
          </div>
        </div>
      </div>
      {/* Portfolio card */}
      <Card title={'Some of my works:'} options={stackSlides} />
      {/* Stack card */}
      <Card title={'My stack:'} options={stackSlides} bg={'bg-rose-500'} />
      {/* Experience card */}
      <Card title={'My work experience: '} options={experienceSlides} bg={'bg-green-700'}/>
    </div>
  )
}

export default App
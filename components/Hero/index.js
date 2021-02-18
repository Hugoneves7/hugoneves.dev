import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='md:grid md:grid-cols-2 md:pt-16 leading-none'>
      <div className='pt-16 md:pt-32'>
        <h1 className='text-4xl uppercase pl-16'>Olá, eu sou o Hugo Neves!</h1>
        <h2 className='text-4xl font-bold md:text-5xl uppercase pl-16'>Fullstack Developer</h2>
        <div className='mx-8 px-8 relative border-purple-600 border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-7'>
          <h3 className='absolute bg-purple-600 py-2 px-6 top-0 -mt-7 text-2xl font-bold uppercase'>Contact Me</h3>

          <p className='text-center md: text-left'>
            <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
            <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6' />
            <br />
            <span className='inline-block mt-4'>or drop a line: hugo.neves@outlook.com</span>
          </p>
        </div>
      </div>
      <div>
        <img src='' /></div>
    </div >
  )
}
export default Hero
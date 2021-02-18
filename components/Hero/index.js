import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
  return (
    <div className='md:grid md:grid-cols-2 md:pt-16 leading-none'>
      <div className='pt-16 md:pt-32'>
        <h1 className='text-4xl uppercase pl-16'>Olá, eu sou o Hugo Neves!</h1>
        <h2 className='text-4xl font-bold md:text-5xl uppercase pl-16'>Fullstack Developer</h2>
        <ContactMe />
      </div>
      <div><img src='' /></div>
    </div >
  )
}
export default Hero
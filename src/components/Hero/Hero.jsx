import React from 'react'
import '../Hero/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='text-center'>
        <h1 className='hero-titulo text-white text-8xl font-bold mb-4'>DevTask</h1>
        <div className='hero-content gap-2 flex flex-col text-gray-300'>
          <h2 className='hero-sub font-semibold text-2xl'>Sua lista de tarefas, do jeito que um dev precisa</h2>
          <p className='text-xl'>Cadastre, filtre e conclua suas tarefas com uma interface leve feita pra quem programa</p>
        </div>

      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Graduação',
    subject: 'Gestor em Tecnologia da Informação',
    institution: 'Pontifícia Universidade Católica de Campinas - PUC-Campinas'
  },
  {
    degree: 'Técnico',
    subject: 'Ténico em Informátca',
    institution: 'EEETEPA Francisco das Chagas de Azevedo (CACAU)'
  }
]

const Education = () => {
  return (
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5'>My Education</h3>
      <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-purple-600 bg-opacity-5 rounded-lg shadow-lg'>
        {degrees.map((degree, i) => (
          <EducationItem key={'i' + i} degree={degree} />
        ))}
      </div>
    </div>
  )
}
export default Education
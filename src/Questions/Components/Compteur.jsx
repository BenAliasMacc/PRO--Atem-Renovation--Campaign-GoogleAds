import React from 'react'
import './Compteur.scss'

const Compteur = ({ activeQuestion, numberOfQuestions}) => {
  return (
    <div className='compteur'>{activeQuestion + 1} / {numberOfQuestions}</div>
  )
}

export default Compteur
import React, { useEffect } from 'react'
import './Questions.scss'
import './Validation.scss'

const Validation = ({setOpenModalValidation}) => {

    const closeModal = () => {
        setOpenModalValidation(false)
    }

    useEffect(() => {
        setTimeout(closeModal, 2000)
    }, [])

    return (
        <div className='formulaire-wrapper'>
            <div className='validation'>
                <h1> Félicitations votre demande a bien été envoyée</h1>
                <div className='validation__image'>
                    <svg viewBox="0 0 64 64">
                        <circle className="circleBg" cx="32" cy="32" r="30" fill="#5ade9c"></circle>
                        <path className="circleShadow" d="M36 58A30 30 0 0 1 12.882 8.881 30 30 0 1 0 55.118 51.12 29.882 29.882 0 0 1 36 58z" fill="#000028" opacity=".15"></path>
                        <circle className="circleStroke" cx="32" cy="32" r="30" transform="rotate(-45 32 32)" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="miter" stroke-width="2"></circle>
                        <path className="stroke" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="miter" stroke-width="2" d="M20.998 32.015l8.992 8.992 16.011-16.011"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Validation
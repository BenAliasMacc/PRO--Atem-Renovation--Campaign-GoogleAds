import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './Questions.scss'
import './QuestionsResponsives.scss'
import questionsData from '../Data/data.json'
// import questionsData from '../Data/dataTest.json'
import { Footer } from './Footer'
import Compteur from './Compteur'
import closeButton from '../Assets/closeButton.svg'

const Questions = ({setOpenModalForm, hideModal, setHideModal, setOpenModalValidation }) => {

    const [activeQuestion, setActiveQuestion] = useState(0);
    const data = questionsData.data[activeQuestion];
    const { titre, description, styles, inputs } = data;
    const numberOfQuestions = questionsData.data.length;

    const { register, formState: { errors }, handleSubmit } = useForm({});

    const onSubmit = data => {
        console.log(data)
        if(activeQuestion < numberOfQuestions - 1) {
            setActiveQuestion(activeQuestion + 1);
        }
    }

    const closeModal = () => {
        setOpenModalForm(false)
    };

    const handleHideModal = () => {
        setHideModal("hide")
    };

    const test = e => {
        e.stopPropagation()
    };

    return (
        <div className={`formulaire-wrapper ${hideModal}`} onClick={handleHideModal}>
            <div className='formulaire' onClick={test} > 
                
                <div className='question__title'>
                    <h2>{titre}</h2>
                    {description && <p>{description}</p>}
                </div>

                <form className="question__form" onSubmit={handleSubmit(onSubmit)} >
                    {
                        inputs.map(({ inputType, choices, inputName, placeholder }, index) => (
                            <div key={index}>
                                <div className={styles?.container} >
                                    {choices ? (choices.map(({ name, image }, index2) => (
                                        <div className={styles?.cards} key={index2} >
                                            <label htmlFor={name} >
                                                <img className='radio-image' src={image} alt={name}/>
                                                <p>{name}</p>
                                            </label>
                                            <input 
                                                type={inputType}
                                                id={name}
                                                value={name}
                                                {...register(inputName, {required: 'Ce champ est obligatoire'})}                                   
                                            />
                                        </div>
                                    ))) : (
                                        <input 
                                            type={inputType}
                                            id={inputName} 
                                            placeholder={placeholder} 
                                            key={index} 
                                            {...register(inputName, {
                                                required: 'Ce champ est obligatoire',
                                                minLength: { value: 10, message: 'Vous devez saisir au moins 2 chiffres'}
                                            })}
                                        />
                                    )}
                                </div>
                                {errors[inputName] && <span style={{color: 'red'}}>{errors[inputName].message}</span>}
                                {console.log(errors)}                           
                            </div>
                        ))
                    }
                    
                    <Footer />
                </form>

                <Compteur activeQuestion={activeQuestion} numberOfQuestions={numberOfQuestions}/>

                <div className='closeButton' onClick={closeModal}><img className='test' src={closeButton} alt='fermeture modale'/></div>
            </div>
        </div>
    )
}

export default Questions
import React from 'react'
import flecheDroite from '../Assets/arrowRight.svg'
import './Footer.scss'

export const Footer = () => {


    return (

        <div className='question-footer'>

            <button type='submit' className="next" >
                <p>Suivant</p>
                <img className='arrow arrow-right' src={flecheDroite} alt='fleche vers la Droite'/>
            </button>

            {/* {error && <div className="error">{error}</div>}

            {
                activeQuestion === numberOfQuestions -1 ? (

                    <form method="post" data-netlify="true" action='/' >

                        <input type="hidden" name="form-name" value="estimate"/>

                        <textarea name="estimate-array" defaultValue={JSON.stringify(answer)} hidden></textarea>
                        <button type='submit' className="submit">
                                <p>Envoyer le formulaire</p>
                        </button>
                    </form>
                    
                ) : (
                    <button type='submit' className="next" >
                        <p>Suivant</p>
                        <img className='arrow arrow-right' src={flecheDroite} alt='fleche vers la Droite'/>
                    </button>
                )
            } */}
            
        </div>
  )
}
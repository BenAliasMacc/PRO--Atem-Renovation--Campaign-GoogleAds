import React, { useState } from 'react'
import Questions from './Questions'
import './LauncherModal.scss'
import Validation from './Validation'

const Launcher = () => {

  const [openModalForm, setOpenModalForm] = useState(false)
  const [openModalValidation, setOpenModalValidation] = useState(false)
  const [hideModal, setHideModal] = useState("")

  const handleModalForm = () => {
    openModalForm ? setHideModal("") : setOpenModalForm(true)
  }

  return (
    <div className='container__button-modal'>
        <button className='btn-half site-button button-modal button-lg m-b15' onClick={handleModalForm}>
          <em></em>
          <span>Vérifiez vos aides</span>
        </button>
        
        {openModalForm && <Questions setOpenModalForm={setOpenModalForm} setOpenModalValidation={setOpenModalValidation} hideModal={hideModal} setHideModal={setHideModal} />} 

        {openModalValidation && <Validation setOpenModalValidation={setOpenModalValidation}/>} 
    </div>
  )
}

export default Launcher
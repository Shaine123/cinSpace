import React, { useState } from 'react'
import './modal.css'
import { CloseIcon } from '../../assets/img'
import { useDispatch } from 'react-redux'
import { setModalState } from '../../utils/State/universalSlice'
import axios from 'axios'

const UploadFileModal = () => {
  const dispatch = useDispatch()

  const [file,setFile] = useState()

  const handleFile = (event) => {
     setFile(event.target.files[0])
  }

 const handleUpload = (e) => {
   e.preventDefault()
   const formData = new FormData()
   formData.append('file',file)

   axios.post(`${import.meta.env.VITE_URL}/aws/upload`,formData, {
     headers: {
      'Content-Type' : 'multipart/formdata'
     }
   })
   .then(res => console.log(res))
   .catch(err => console.log(err))
 }
  return (
     <> 
         <div className="bg"></div>
         <div className="uploadmodal-container">
            <div className="headers">
              <div className="editModal-title">Upload File</div>
              <button className='closeModal' onClick={() => {dispatch(setModalState())}}>
                  <img src={CloseIcon} alt="close icon" />
              </button>
            </div>
            <div className="modal-content">
               <form onSubmit={handleUpload} className='upload-form'>
                  <input type="file" name="file" className='upload-input' onChange={handleFile} />
                  <button className='upload-btn'>Upload</button>
               </form>
            </div>
         </div>
     </>
  )
}

export default UploadFileModal

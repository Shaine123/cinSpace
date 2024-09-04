import React, { useState } from 'react'
import './modal.css'
import { useDispatch } from 'react-redux'
import { setModalState, setSuccess } from '../../utils/State/universalSlice'
import axios from 'axios'
const EditModal = ({data}) => {
  const dispatch = useDispatch()
  const [edited,setEdited] = useState(data.description)

  const handleEdit = () => {
     axios.put(`${import.meta.env.VITE_URL}/todos/${data.todo_id}`,{
       description: edited
     })
     .then((res) => {
        if(res.status === 200){
           dispatch(setSuccess())
           dispatch(setModalState())
        }
     })
     .catch((err) => console.log(err))
  }

  return (
    <>
     <div className="bg"></div>
      <div className='editModal-container'>
        <div className="headers">
          <div className="editModal-title">Edit Todos</div>
          <button className="closeModal" onClick={()=>{dispatch(setModalState())}}>X</button>
        </div>
        <div className="contents">
         <input 
               type="text" 
               name="editTodo" 
               id="ed" 
               value={edited}
               onChange={(e) => setEdited(e.target.value)}
         />
        </div>
       <div className="footers">
       <button className='editModal-btn' onClick={handleEdit}>Edit</button> 
       </div>
    </div>
    </>
  
  )
}

export default EditModal

import React, { useEffect, useState } from 'react'
import './storage.css'
import { AddIcon, AllFolder, DeleteFolder, SearchIcon, StaredFolder } from '../../assets/img'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import UploadFileModal from '../../component/Modals/UploadFileModal'
import { setModalState } from '../../utils/State/universalSlice'
import FileType from '../../component/ui/filetype/FileType'
const Storage = () => {

  useEffect( ()=>{
    const queryParams = new URLSearchParams(window.location.search)
    const datas =  queryParams.get('data')

    if(datas){
      const parsedData = JSON.parse(datas)
    }
  },[])

  const [data,setData] = useState([])
  const [search,setSearch] = useState('')
  const {modal1} = useSelector(store => store.universal) 
  const dispatch = useDispatch()

  useEffect(() => {
     axios.get(`${import.meta.env.VITE_URL}/aws/retrieve`)
     .then((res) => {
        setData(res.data)
     })
  },[])


  const handleSubmit = (e) => {
     e.preventDefault()
     console.log(search)
  }


const [dropMenu,setDropMenu] = useState('')
const closeDropMenu = (id) => {
   setDropMenu(true)
}
  return (
    <div className='storage-container'>
      <div className="control-section">
         <div className="controls">
          <div className="indicator">
              <h2>Storage</h2>
              <p>2.6 Gb of 5 Gb User</p>
          </div>
            <button className="upload-btn" onClick={() =>{dispatch(setModalState())}}> 
                <img src={AddIcon} alt="add" />
              <p>Upload Files</p>
            </button>
         </div>
          <div className="storage-bar"></div>
      </div>
      <div className="sub-container">
        <div className="box-1">
            <div className="folder-container">
               <h2 className="title">My Folder</h2>
              <div className="folder-items">
                <div className="folder-item">
                    <img src={AllFolder} alt="all" />
                    <p className="folderitem-name">All Files</p>
                </div>
                <div className="folder-item">
                    <img src={StaredFolder} alt="all" />
                    <p className="folderitem-name">Stared Files</p>
                </div>
                <div className="folder-item">
                    <img src={DeleteFolder} alt="all" />
                    <p className="folderitem-name">Delete Files</p>
                </div>
              </div>
            </div>
        </div>
        <div className="box-2">
          <h2 className="title">All Files</h2>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className="input-container">
              <input 
                type="text" 
                placeholder='Type to search'
                onChange={(e) => {setSearch(e.target.value)}}
                className="search-comp" 
              />
              <img src={SearchIcon} alt="search"  />
            </div>
           <button>Submit</button>
          </form>
          <div className="filescard-container">
            {
               data.length > 0 ? 
               data.map((item,index)=> {
                  return (
                    <FileType 
                      data={item} 
                      key={item.Key} 
                      index = {index}
                      handleClose = {closeDropMenu}
                      closeId = {dropMenu}
                   />
                  )
               })
               :
               ''
            }
          </div>
        </div>
      </div>
      {modal1 && <UploadFileModal/>}
    </div>
  )
}

export default Storage

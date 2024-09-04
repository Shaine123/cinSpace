import React, { useEffect, useState } from 'react'
import './filetype.css'
import { ActionIconBtn, DocIcon, JpegIcon, PngIcon, UniFileIcon, VideoIcon } from '../../../assets/img'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux'

const FileType = ({data,index,handleClose,closeId}) => {

  const [openDropdown, setOpenDropDown] = useState(false)
   const {dropState} = useSelector(state => state.universal)

  const handleCloseDrop = () => {
    if(dropState){
      setOpenDropDown(false)
    }

    setOpenDropDown(item => !item)
    
  }
  return (
    <div className="fileType-container">
      <input 
         type="checkbox" 
         name="check" 
      />
     <div className="fileType-info">
       {
          data.Type == 'png' ? 
          <img src={PngIcon} alt="png"  />
          :
          data.Type == 'jpeg' ? 
          <img src={JpegIcon} alt="png"  />
          :
          data.Type == 'mp4' ? 
          <img src={VideoIcon} alt="png"  />
          :
          data.Type == 'dox' ? 
          <img src={DocIcon} alt="png"  />
          :
          <img src={UniFileIcon} alt="png"  />
       }
       <div className="file-details">
          <p>{data.Key}</p>
          <p>{data.LastModified} {data.Size}KB</p>
    
       </div>
     </div>
      <button className='action-btn' onClick={() => {
         handleClose(index)
        handleCloseDrop()
      
      }}>
         <img src={ActionIconBtn} alt="" />
      </button>
  
         <motion.div 
          className="dropDownMenu"
          initial= {{
            opacity: 0,
            height: '10px',
            zIndex: '-2'
          } }
          animate = {{
             opacity: openDropdown ? 1 : 0,
             height: `${openDropdown ? '150px' : '10px'}`,
             zIndex: openDropdown ? 3 : -2
          }}  
         transition={{
            duration: 0.5,
            type: 'spring',
            stiffness:80
          }}
         >
        
         </motion.div>
      
    </div>
  )
}

export default FileType

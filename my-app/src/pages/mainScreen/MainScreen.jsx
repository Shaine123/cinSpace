import React, { useEffect, useState } from 'react'
import './mainscreen.css'
import axios from 'axios'
import Navbar from '../../component/ui/navbar/Navbar'
import { Outlet } from 'react-router-dom'


const MainScreen = () => {
  return ( 
     <div className="main-container">
       <div className="nav-side">
          <Navbar/>
       </div>
       <div className="out-side">
         <Outlet/>
       </div>
     </div>
  )
}

export default MainScreen

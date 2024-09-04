import React, { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { Account, AccountColored, Chat, ChatColored, DefUserProfile, Logo, LogoutColored, Logout, Music, MusicColored, Storage, StorageColored, Support, SupportColored, Video, VideoColored } from '../../../assets/img'
import './navbar.css'
const Navbar = () => {

   const [hover,setHover] = useState(false)
   const navigate = useNavigate()

   const handleLogout = () => {
       sessionStorage.removeItem('user')
       navigate('/cinspace')
      console.log('working')
   }

  return (
    <div className='navbar-container'>
       <div className="logo-container">
         <img className='nav-img' src={Logo} alt="logo" />
          <p className='logo-name'>CinSpace</p>
       </div>
        <div className="navlist-container">
           <div className="profile-container">
             <img src={DefUserProfile} alt="def" className="profile-img" />
              <p className="profile-name">John Dow</p>
           </div>
           <div className="divider"></div>
           <ul className="nav-feature">
               <NavLink className='nav-list' onMouseEnter={() => {setHover({state: true, id: 1})}} onMouseLeave={() => {setHover({state: false, id: 1})}}>
                  {
                      hover.state && hover.id === 1 ?
                     <img src={StorageColored} alt="storage" className="nav-img" />
                     :
                     <img src={Storage} alt="storage" className="nav-img" />
                  }
                 <p className="nav-name">Storage</p>
               </NavLink>
               <NavLink className='nav-list'  onMouseEnter={() => {setHover({state: true, id: 2})}} onMouseLeave={() => {setHover({state: false, id: 2})}}>
                  {
                     hover.state && hover.id === 2 ?
                     <img src={VideoColored} alt="storage" className="nav-img" />
                     :
                     <img src={Video} alt="storage" className="nav-img" />
                  }
                 <p className="nav-name">Videos</p>
               </NavLink>
               <NavLink className='nav-list'  onMouseEnter={() => {setHover({state: true, id: 3})}} onMouseLeave={() => {setHover({state: false, id: 3})}}>
                  {
                     hover.state && hover.id === 3 ?
                     <img src={MusicColored} alt="storage" className="nav-img" />
                     :
                     <img src={Music} alt="storage" className="nav-img" />
                  }
                 <p className="nav-name">Music</p>
               </NavLink>
               <NavLink className='nav-list'   onMouseEnter={() => {setHover({state: true, id: 4})}} onMouseLeave={() => {setHover({state: false, id: 4})}}>
                  {
                      hover.state && hover.id === 4 ?
                      <img src={ChatColored} alt="storage" className="nav-img" />
                      :
                      <img src={Chat} alt="storage" className="nav-img" />

                  }
                 <p className="nav-name">Chat</p>
               </NavLink>
           </ul>
           <div className="divider"></div>
           <ul className="nav-feature">
              <NavLink className='nav-list'  onMouseEnter={() => {setHover({state: true, id: 5})}} onMouseLeave={() => {setHover({state: false, id: 5})}}>
                {
                  hover.state && hover.id === 5 ?
                  <img src={AccountColored} alt="storage" className="nav-img" />
                  :
                  <img src={Account} alt="storage" className="nav-img" />
                }
                 <p className="nav-name">Account</p>
               </NavLink>
               <NavLink className='nav-list'  onMouseEnter={() => {setHover({state: true, id: 6})}} onMouseLeave={() => {setHover({state: false, id: 6})}}>
                  {
                     hover.state && hover.id === 6 ?
                     <img src={SupportColored} alt="storage" className="nav-img" />
                     :
                     <img src={Support} alt="storage" className="nav-img" />
                  }
                 <p className="nav-name">Help & Support</p>
               </NavLink>
               <NavLink className='nav-list'   
                   onMouseEnter={() => {setHover({state: true, id: 7})}} 
                   onMouseLeave={() => {setHover({state: false, id: 7})}}
                   to='/'
               >
                  {
                       hover.state && hover.id === 7 ?
                      <img src={LogoutColored} alt="storage" className="nav-img" />
                      :
                      <img src={Logout} alt="storage" className="nav-img" />                      
                  }
                 <p className="nav-name">Logout</p>
               </NavLink>
           </ul>
        </div>
    </div>
  )
}

export default Navbar

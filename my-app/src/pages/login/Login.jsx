import React, { useEffect } from 'react'
import './login.css'
import { GoogleIcon, Logo } from '../../assets/img'
import {useFormik} from 'formik'
import { userSchema } from '../../utils/yupSchema'
import { NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  
  useEffect(() => {
     sessionStorage.removeItem('user')
  },[])
  
  const navigate = useNavigate()

  const submitForm  = () => {
     axios.post(`${import.meta.env.VITE_URL}/auth/signin`, {
        username: values.username,
        password: values.password
     })
     .then((res) => {
      console.log(res.data)
        if(res.status == 201){
           sessionStorage.setItem('user', JSON.stringify({
            token: res.data.token
         }))
           navigate('/cinspace/storage')
        }
     })
     .catch((err) => console.log(err))
     
  }

  const { errors, touched, handleChange ,handleBlur, handleSubmit, values} = useFormik({
     initialValues: {
        username: '',
        password: ''
     },
     validationSchema: userSchema,
     onSubmit: submitForm
  })

const handleGoogleLogin = () => {
   window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3002%2Fgoogle%2Fouath%2Fredirect&scope=profile%20email&client_id=690108978858-lvagnclnrg6rp345hcg6vu441e3c2tce.apps.googleusercontent.com&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow '
}


  return (
    <div className='login-bg'>
        <div className="logo-container">
            <div className="logo-img">
               <img src={Logo} alt="logo" />
            </div>
             <h1 className="logo-title">CinSpace</h1>
        </div>
        <div className="login-container">
          <h2 className="login-title">Sign-up or Login</h2>
          <p className='login-subtitle'>Login or create account to manage your files</p>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="usernmae">Username<span style={{marginLeft:'5px',color:'red'}}>*</span></label>
                <input 
                  type="text" 
                  name="username" 
                  id="user"
                  value={values.username}
                  onChange={handleChange}
                />
                <p className="error-message">{errors.username}</p>
              </div>
              <div className="input-container">
                <label htmlFor="password">Password<span style={{marginLeft:'5px',color:'red'}}>*</span></label>
                <input 
                 type="password" 
                 name="password" 
                 id="pass"
                 value={values.password}
                 onChange={handleChange}
              />
                  <p className="error-message">{errors.password}</p>
              </div> 
              <button className='login-btn' type="submit">Continue</button>
            </form>
             <p className='signup-p'>No account ? <NavLink to='/signup' className='navlink-p'>Sign Up</NavLink> </p>
            <div className="thirdparty-logins">
                 <p className="thirdparty-text">Or Login with</p>
                 <div className="google-btn" onClick={handleGoogleLogin}>
                   <img src={GoogleIcon} alt="google" />
                   <p className="google-text">Google</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Login

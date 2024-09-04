import React from 'react'
// import './login.css'
import { Logo } from '../../assets/img'
import {useFormik} from 'formik'
import { signupSchema, userSchema } from '../../utils/yupSchema'
import { NavLink} from 'react-router-dom'
import axios from 'axios'
import './signup.css'

const Signup = () => {

  const submitForm  = () => {
     axios.post(`${import.meta.env.VITE_URL}/users`, {
        username: values.username,
        password: values.password,
        cpassword: values.cpassword,
        email: values.email,
        phonenumber: values.phonenumber,
     })
     .then((res) => console.log(res))
     .catch((err) => console.log(err))
     
  }

  const { errors, touched, handleChange ,handleBlur, handleSubmit, values} = useFormik({
     initialValues: {
        username: '',
        email: '',
        phonenumber: '',
        cpassword: '',
        password: ''
     },
     validationSchema: signupSchema,
     onSubmit: submitForm
  })




  return (
    <div className='login-bg'>
        <div className="logo-container">
            <div className="logo-img">
               <img src={Logo} alt="logo" />
            </div>
             <h1 className="logo-title">CinSpace</h1>
        </div>
        <div className="login-container">
          <h2 className="login-title">Create an account</h2>
            <form onSubmit={handleSubmit} >
              <div className="input-container-signup">
                <label htmlFor="usernmae">Username<span style={{marginLeft:'5px',color:'red'}}>*</span></label>
                <input 
                  type="text" 
                  name="username" 
                  id="user"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="error-message">{errors.username}</p>
              </div>
              <div className="input-container-signup">
                <label htmlFor="usernmae">Email<span style={{marginLeft:'5px',color:'red'}}>*</span></label>
                <input 
                  type="email" 
                  name="email" 
                  id="em"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="error-message">{errors.email}</p>
              </div>
              <div className="input-container-signup">
                <label htmlFor="usernmae">PhoneNumber<span style={{marginLeft:'5px',color:'red'}}>*</span></label>
                <input 
                  type="phone" 
                  name="phonenumber" 
                  id="phone"
                  value={values.phonenumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="error-message">{errors.phonenumber}</p>
              </div>
              <div className="input-container-signup">
                <label htmlFor="password">Password<span style={{marginLeft:'5px',color:'red'}}>*</span></label>
                <input 
                 type="password" 
                 name="password" 
                 id="pass"
                 value={values.password}
                 onChange={handleChange}
                 onBlur={handleBlur}
              />
                  <p className="error-message">{errors.password}</p>
              </div> 
              <div className="input-container-signup">
                <label htmlFor="password">Confirm Password<span style={{marginLeft:'5px',color:'red'}}>*</span></label>
                <input 
                 type="password" 
                 name="cpassword" 
                 id="cpass"
                 value={values.cpassword}
                 onChange={handleChange}
                 onBlur={handleBlur}
              />
                  <p className="error-message">{errors.cpassword}</p>
              </div> 
              <button className='login-btn' type="submit">Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default Signup

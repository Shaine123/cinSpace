import * as Yup from 'yup'


export const userSchema = Yup.object({
   username: Yup.string().min(3).required('Please enter Username'),
   password: Yup.string().min(5).required('Please enter Password')
})

export const signupSchema = Yup.object({
   username: Yup.string().min(5).required('Please enter Username'),
   password: Yup.string().min(7).required('Please enter Password'),
   email: Yup.string().email('Please enter a valid email').required('Please enter email'),
   phonenumber: Yup.number('Please enter a valid phone number').integer().required('Please enter phone number'),
   password: Yup.string().min(5).required('Please enter password'),
   cpassword: Yup.string().oneOf([Yup.ref('password','Password did not match')]).required('Please enter password')
})
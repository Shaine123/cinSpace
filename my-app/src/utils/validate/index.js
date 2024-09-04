import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const validate = () => {
  const navigate = useNavigate()
  const session = JSON.parse(sessionStorage.getItem('user'))
  
  useEffect(() => {
   if(session === null){
      navigate('/')
   }
  },[])
}

export default validate
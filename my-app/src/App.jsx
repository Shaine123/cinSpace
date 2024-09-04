import { Route, Routes } from "react-router-dom"
import MainScreen from "./pages/mainScreen/MainScreen"
import './assets/App.css'
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Storage from "./pages/storage/Storage"
function App() {
  return (
    <>
       <Routes>
          <Route path="/" element = {<Login/>}/>
          <Route path="/signup" element  = {<Signup/>}/>

          <Route element = {<MainScreen/>}>
             <Route  path="/cinspace/storage"  element={<Storage/>}/>
          </Route>
       </Routes>
    </>
  )
}

export default App

import Navbar from "./Components/Navbar"
import {Routes,Route } from 'react-router-dom'

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import AdminPage from "./pages/AdminPage"
import UserPage1 from "./pages/UserPage1"
import UserPage2 from "./pages/UserPage2"


function App(){

  return(
    <>
    <Navbar/>

    <Routes>
      <Route exact path="/" element = {<HomePage/>}/>
      <Route  exact  path="/login" element = {<LoginPage/>}/>
      <Route  exact  path="/register" element = {<RegisterPage/>}/>
      <Route  exact  path="/contact" element = {<ContactPage/>}/>
      <Route  exact  path="/about" element = {<AboutPage/>}/>
      <Route  exact  path="/admin" element={<AdminPage/>}/>
      <Route  exact  path="/user1" element={<UserPage1/>}/>
      <Route  exact  path="/user2" element={<UserPage2/>}/>
    </Routes>
    </>
  )
}

export default App
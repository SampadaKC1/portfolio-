import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Projects from '../Pages/Project'
import Login from '../Pages/Login'
import Footer from '../Components/Footer'

import UserList from '../Pages/UserList'
import UserDetail from '../Pages/UserDetail'
import Home from '../Pages/Home'



const AppRouter = () => {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/user" element={<Navigate to="/users" replace />} />
        <Route path="/users">
          <Route index element={<UserList />} />
          <Route path=":id" element={<UserDetail />} />
        </Route>
      </Routes>
   
    </>
  )
}

export default AppRouter
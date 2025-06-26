import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './CSS/App.css'

{/*Here I Import the components from the components folder.*/}
import Layout from './Components/Layout/Layout'
import Home from './Components/MenuOptions/Home'
import LogIn from './Components/MenuOptions/LogIn'
import SignUp from './Components/MenuOptions/SignUp'
import AboutUs from './Components/MenuOptions/AboutUs'
import Gametracker from './Components/MenuOptions/Gametracker'


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* 
            This is the main route that contains the layout and the nested routes for example Home, LogIn, and SignUp.
            The Layout component will render the header, footer, and main content area.
          */}
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='Login' element={<LogIn />}/>
            <Route path='Signup' element={<SignUp />}/>
            <Route path='Gametracker' element={<Gametracker />}/>
            <Route path='AboutUs' element={<AboutUs />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
  
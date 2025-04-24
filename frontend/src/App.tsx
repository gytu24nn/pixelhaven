import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './CSS/App.css'

{/*Here I Import the components from the components folder.*/}
import Layout from './Components/Layout/Layout'
import Home from './Components/MenuOptions/Home'
import LogIn from './Components/MenuOptions/LogIn'
import SignUp from './Components/MenuOptions/SignUp'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='Login' element={<LogIn />}/>
            <Route path='Signup' element={<SignUp />}/>

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

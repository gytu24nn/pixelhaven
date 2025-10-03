import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './CSS/App.css'
import { ErrorBoundary } from 'react-error-boundary'

{/*Here I Import the components from the components folder.*/}
import Layout from './Components/Layout/Layout'
import Home from './Components/MenuOptions/Home'
import LogIn from './Components/MenuOptions/LogIn'
import SignUp from './Components/MenuOptions/SignUp'
import AboutUs from './Components/MenuOptions/AboutUs'
import Gametracker from './Components/MenuOptions/Gametracker'
import ErrorBoundaryFallBack from './Components/ErrorBoundry'
import Genres from './Components/MenuOptions/Genres'
import GenreDetail from './Components/MenuOptions/GenreDetail'
import GameDetail from './Components/MenuOptions/GameDetail'

function App() {

  return (
    <>
      <Router>
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Routes>
          {/* 
            This is the main route that contains the layout and the nested routes for example Home, LogIn, and SignUp.
            The Layout component will render the header, footer, and main content area.
          */}
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/Game/:gameId' element={<GameDetail />}/>
            <Route path='Genres' element={<Genres />}/>
            <Route path='Genre/:categoryId' element={<GenreDetail />}/>
            <Route path='Login' element={<LogIn />}/>
            <Route path='Signup' element={<SignUp />}/>
            <Route path='Gametracker' element={<Gametracker />}/>
            <Route path='AboutUs' element={<AboutUs />}/>
            
          </Route>
        </Routes>
        </ErrorBoundary>
      </Router>
    </>
  )
}

export default App
  
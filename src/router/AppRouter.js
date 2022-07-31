import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import React from 'react'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Details from '../components/Details'

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default AppRouter
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import About from './About/About'
import Contact from './ContactMe/Contact'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import Apropos from './components/pages/Apropos'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/pages/Error'
import FicheLogements from './components/FicheLogements'
import './styles/Header.css'
import './styles/Error.css'
import './styles/Footer.css'
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/kasa'>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/Fiche-logement/:id' element={<FicheLogements />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
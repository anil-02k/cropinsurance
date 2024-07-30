import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginSignUp from './Pages/LoginSignUp'
import Home from './Pages/Home'
import Document from './Pages/Document'
import Report from './Pages/Report'
import Gallery from './Pages/Gallery'
import AboutUs from './Pages/AboutUs'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/documents' element={<Document/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      
      </Routes>
      

      </BrowserRouter>

    </div>
  )
}

export default App

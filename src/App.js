import React from 'react'
import { } from 'react-icons/fa'
 import { } from 'react-icons/ai'
import { } from 'react-icons/bi'
import { } from 'react-icons/bs'
import { } from 'react-icons/cg'
import { } from 'react-icons/fc'
import { } from 'react-icons/fi'
import Me from './Pages/Me'
import Skills from './Pages/Skills'
import Certificate from './Pages/Certificate'
import Projects from './Pages/Projects'
 import About from './Pages/About'
import Container from './Container'
import { Route,Routes } from 'react-router-dom'
 
function App() {
  return (
    <>
      <Container/>
      <Routes>
        <Route path='/' element={<Me />} />
        <Route path='skills' element={<Skills />} />
        <Route path='certificate' element={<Certificate />} />
        <Route path='skills/certificate' element={<Certificate />} />
          <Route path='project' element={<Projects />} />
         <Route path='skills/certificate/project' element={<Projects />} />
         <Route path='skills/certificate/project/about' element={<About />} />
         <Route path='about' element={<About />} />

      </Routes>  
    </>
   )
 }
 export default App
  
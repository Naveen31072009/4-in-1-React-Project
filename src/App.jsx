import React from 'react'

import Color from "./components/Color.jsx"
import Generator from './components/Generator.jsx'
import Navbar from './components/Navbar.jsx'
import Flex from './components/Flex.jsx'
import Clock from './components/Clock.jsx' 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
    
    <nav className='w-full h-[5rem] text-xl text-blue-400 bg-black flex  items-center justify-between p-5'>
      <Link to="/">Home</Link>
      <Link to="/Color">Digital clock</Link>
      <Link to="/Generator">Password Generator</Link>
      <Link to="/Navbar">Sample</Link>
      <Link to="/Flex">portfolio card</Link>
      <Link to="/Clock">stop watch</Link>
    </nav>
    
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/Color' element={<Color /> } />
      <Route path='/Generator' element={<Generator /> } />
      <Route path='/Navbar' element={<Navbar /> } />
      <Route path='/Flex' element={<Flex /> } />
      <Route path='/Clock' element={<Clock /> } />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
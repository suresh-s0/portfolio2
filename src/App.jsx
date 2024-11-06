import { useState } from 'react'
import Topbar from './components/topbar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'


function App() {

  return (
    <div className="bg-gradient-to-r from-gray-800 via-black to-gray-800 font-mono ">
      <div >

        <Topbar></Topbar>
        <Home></Home>
        <About></About>
        <Projects></Projects>

      </div>

    </div>
  )
}

export default App

import { useState } from 'react'
import Topbar from './components/topbar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contacts from './components/contacts'

function App() {

  return (
    <div className="bg-gradient-to-r from-gray-800 via-black to-gray-800 font-mono scrollable-container">
    <div className="bg-gradient-to-r from-gray-800 via-black to-gray-800 font-mono scrollable-container">
      <div >

        <Topbar></Topbar>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contacts></Contacts>

      </div>

    </div>
    </div>

  )
}
export default App

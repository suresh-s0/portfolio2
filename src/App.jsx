import { useState } from 'react'
import Topbar from './components/topbar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contacts from './components/contacts'

import Skills from './components/skills'
import Fotter from './components/fotter'




function App() {

  return (
    <div className="bg-gradient-to-r from-gray-800 via-black to-gray-800 font-mono scrollable-container">

      <div >

        <Topbar></Topbar>
        <Home></Home>
        <About></About>

        <Skills></Skills>
        <Projects></Projects>
        <Contacts></Contacts>
        <Fotter></Fotter>


      </div>

    </div>
    </div>

  )
}
export default App

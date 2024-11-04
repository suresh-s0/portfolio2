import { useState } from 'react'
import Topbar from './components/topbar'
import Home from './components/home'
import About from './components/about'


function App() {

  return (
    <div className="bg-gray-700 font-mono ">
      <div >

        <Topbar></Topbar>
        <Home></Home>
        <About></About>

      </div>

    </div>
  )
}

export default App

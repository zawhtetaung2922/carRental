import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import HeroBanner from './component/HeroBanner'
import OurServices from './component/OurServices'

function App() {

  return (
    <>
      <Navbar />
      <HeroBanner />
      <OurServices />
    </>
  )
}

export default App

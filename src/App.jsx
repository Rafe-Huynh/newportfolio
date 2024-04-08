import { useState } from 'react'

import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/HomePage/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
    </div>
  )
}

export default App
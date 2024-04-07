import { useState } from 'react'

import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/HomePage/Home'
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
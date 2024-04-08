import React, {useState} from 'react'
import styles from "./Navbar.module.css"
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiMailOpen} from 'react-icons/hi'
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}></div>
      <div className={styles.menu}>
      <div className={styles.menuBtn} onClick={() => (setMenu(!menu))}>
          {menu ?
          <IoMdCloseCircle size={40}/>:
          <RiMenu3Fill size={40}/>
          }
        </div>
        <ul className={`${styles.menuItem} ${menu && styles.menuOpen}`} onClick={() => setMenu(false)}>
          <li>
          <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.IconContainer}>
        <ul>
          <li className={styles.Icon}>
            <a className= {styles.link} href="https://www.linkedin.com/in/thai-huynh-251a39218/" target="_blank">Linkedin <FaLinkedin size={40} /></a>
          </li>
          <li className={styles.Icon}>
            <a  className= {styles.link} href="https://github.com/Thai-Huynh0510" target="_blank"> GitHub <FaGithub size={40}/> </a>
          </li>
          <li className={styles.Icon}>
            <a  className= {styles.link} href='#contact' > Contact <HiMailOpen size={40} /> </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
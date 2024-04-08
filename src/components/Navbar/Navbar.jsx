import React, {useState} from 'react'
import styles from "./Navbar.module.css"
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from 'react-scroll'
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Home Page</a>
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
            <a href='#Projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
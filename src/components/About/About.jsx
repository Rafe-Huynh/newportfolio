import React from 'react'
import { IoIosSchool } from "react-icons/io";
import { MdOutlineImportantDevices } from "react-icons/md";
import styles from "./About.module.css"
import { getImageUrl } from '../../ultis'
const About = () => {
  return (
    <section id="about" className={styles.container}> 
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img src={getImageUrl("astro2.gif")} className= {styles.image}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <IoIosSchool size={50}/>
                <div className={styles.text}>
                <h3>Associate of Art</h3>
                <p>Graduated from Borough of Manhattan College, Major in Computer Science</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <IoIosSchool size={50}/>
                <div className={styles.text}>
                <h3>Bachelor of Art</h3>
                <p>Graduated from Hunter College, Major in Computer Science</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <MdOutlineImportantDevices size={50}/>
                <div className={styles.text}>
                <h3>Software Developer</h3>
                <p>Learning and improving front-end skill, back-end skill, and Python</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  )
}

export default About
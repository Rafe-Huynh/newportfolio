import React from 'react'
import skills from "../../../data/skills.json"
import experience from "../../../data/experience.json"
import { getImageUrl } from '../../ultis'
import styles from "./Skills.module.css"
import { CiCalendarDate } from "react-icons/ci";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Skills = () => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 1000
      }) 
  return (
    <section id="skills"className={styles.container}>
        <h2 className={styles.title}>
            Skills
        </h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {
                    skills.map((skill, id) => {
                      return <div key={id} className={styles.skill} data-aos="fade-up-right">
                        <div className={styles.skillImage}><img src={getImageUrl(skill.imageSrc)} alt={skill.title}/></div>
                        <p>{skill.title}</p>
                        </div>  
                    })
                }
            </div>
            <ul className={styles.experience}>
                {
                    experience.map((item, id) => {
                        return <li key={id} className={styles.experienceItem} data-aos="fade-up-left">
                            <div className={styles.experienceDetails}>
                                <h3>{`${item.role}, ${item.company}`}</h3>
                                <p><CiCalendarDate size={20}/> {`${item.startDate} - ${item.endDate}`}</p>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Skills
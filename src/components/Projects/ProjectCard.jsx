import React from 'react'
import { getImageUrl } from '../../ultis'
import styles from "./ProjectCard.module.css"
const ProjectCard = ({item}) => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl(item.imageSrc)} alt ={item.title} className={styles.image}/>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.desc}>{item.desc}</p>
        <ul className={styles.skills}>{item.skills.map((skill, id) => {
            return <li key ={id} className={styles.skill}>{skill}</li>
        })} 
        </ul>
        <div className={styles.links}>
        <a href={item.visit} className={styles.link}> Visit</a>
        <a href={item.source} className={styles.link}> Github </a>
        </div>
        </div>
  )
}

export default ProjectCard
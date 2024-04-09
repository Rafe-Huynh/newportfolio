import React from 'react'
import { getImageUrl } from '../../ultis'
import styles from "./Home.module.css"
import { Link } from 'react-scroll';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
  AOS.init({
    easing: 'ease-out-quart',
    delay: 0,
    duration: 1000
  })
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hello, This is <br/> Thai Huynh
            </h1>
            <p className={styles.desc}>
        I'm a software engineer.
        As a recent graduate,
        I understand the importance of staying ahead in tech.
        I am committed to continuous learning, 
        eager to add more tools to my developer's arsenal
        </p>
        <button className={`${styles.bubble} ${styles.floatUpDown}`}>
            <Link to="about" smooth={true}>
              Learn more about me
            </Link>
          </button>
        </div>
        <img src={getImageUrl("astro.gif")} className= {styles.image} data-aos='fade-up'></img>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}>
        </div>
    </section>
  )
}

export default Home
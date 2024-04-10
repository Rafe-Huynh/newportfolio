import React from 'react'
import { useRef } from 'react'
import styles from './Parallax.module.css'
import {motion, useScroll, useTransform} from "framer-motion"
const Parallax = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["start start", "end start"]
  })
  const yBgText = useTransform(scrollYProgress, [0,1], ["0%", "300%"])
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "50%"])
  const yBgRocket = useTransform(scrollYProgress, [0,1], ["0%", "-60%"])
  return (
    <section className={styles.container} ref={ref}>
        <motion.h1 style= {{y: yBgText}}className={styles.title}>
            About Me
        </motion.h1>
        <motion.div className={styles.mountains}/>
        <motion.div style= {{y: yBgRocket}} className={styles.rocket}/>
        <motion.div style= {{x: yBg}} className={styles.stars}/>
        <motion.div style= {{y: yBg}} className={styles.sun}/>
    </section>
  )
}

export default Parallax
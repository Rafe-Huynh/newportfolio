import React from 'react'
import styles from "./Contact.module.css"
import { useState } from 'react';
import { SiMinutemailer } from "react-icons/si";
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setName('');
      setEmail('');
      setMessage('');
  
    };
  return (
    <section id='contact' className={styles.container}>
        <h2 className={styles.title}>  Contact  <SiMinutemailer size={20}/></h2>
        <form className={styles.form} method='POST' action='https://getform.io/f/7da41f6b-04da-4b3c-8dd5-7895b45dcfb6'>
            <input type='text' placeholder='Name...' name ='name' className={styles.ContactInput} value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' placeholder='Email...' name ='email' className={styles.ContactInput} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <textarea placeholder=' Message...' name='message' className={styles.text} value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type='submit' className={styles.Btn}>Submit</button>
        </form>
    </section>
  )
}

export default Contact
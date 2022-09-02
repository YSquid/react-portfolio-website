import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsPhone} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0yqopkd', 'template_odoxcdi', form.current, 'Iv-UOvg-qxM985Ac3')
      
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact-icon'/>
            <h4>Email</h4>
            <h5>ahmad.k@ysquid.tech</h5>
            <a href="mailto:ahmad.k@ysquid.tech" target="_blank">Send an Email</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact-icon' />
            <h4>Messenger</h4>
            <h5>Ahmad Kariem</h5>
            <a href="https://m.me/ahmad.a.kariem" target="_blank">Message Me</a>
          </article>

          <article className="contact__option">
            <BsPhone className='contact-icon' />
            <h4>Cell</h4>
            <h5>(306)-491-6395</h5>
            <a href="tel:3064916395" target="_blank">Call or Text</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
          





      </div>

    </section>
  )
}

export default Contact
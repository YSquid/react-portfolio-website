import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsPhoneFill } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [sentStatus, setSentStatus] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ssvs6wj",
      "template_p7tmnuo",
      form.current,
      "Q8XDB0RYxa1mSXVAp"
    );
    e.target.reset();
    setSentStatus(true);
  };
  return (
    <section id="contact">
      <h2>Get in Touch</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact-icon" />
            <h4>Email</h4>
            <h5>contact@ahmadkariem.com</h5>
            <a
              href="mailto:contact@ahmadkariem.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an Email
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact-icon" />
            <h4>LinkedIn</h4>
            <h5>Ahmad Kariem</h5>
            <a
              href="https://www.linkedin.com/in/ahmad-kariem/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message on LinkedIn
            </a>
          </article>

          <article className="contact__option">
            <BsPhoneFill className="contact-icon" />
            <h4>Cell</h4>
            <h5>(306)-491-6395</h5>
            <a href="tel:3064916395" target="_blank" rel="noreferrer">
              Call or Text
            </a>
          </article>
        </div>

        {sentStatus === false ? (
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              id="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button className="btn btn-primary">Send Message</button>
          </form>
        ) : (
          <div>
            <p>
              Thanks for your interest! I strive to respond to all messages
              within 48 hours.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

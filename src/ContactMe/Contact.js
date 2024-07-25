import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
      <div className="container2" id="contact">
        <h2 className="section text-center text-uppercase">Contact Me</h2>
      </div>

      <div className="container contact-section" id="contact">
        <div className="row justify-content-center">
          <div className="col-md-3 contact-box">
            <a href="https://www.linkedin.com/in/" target="_blank" className="contact-link">
              <i className="fab fa-linkedin fa-2x"></i> LinkedIn
            </a>
          </div>
          <div className="col-md-3 contact-box">
            <a href="mailto:amalinzuhari@gmail.com" className="contact-link">
              <i className="fas fa-envelope fa-2x"></i> Email
            </a>
          </div>
          <div className="col-md-3 contact-box">
            <a href="https://wa.me/601234567895" target="_blank" className="contact-link">
              <i className="fab fa-whatsapp fa-2x"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
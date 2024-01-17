// import React from 'react';
import './ContactUs.css'
import ContactForm from "./ContactForm/ContactForm";
import { ScrollRestoration } from 'react-router-dom';

const ContactUs = () => {
    return (
        <>
        <ScrollRestoration />
        <section id="contactUsHeroSection">
            <div className="contactUs_hero_section_overly_color">
                <div className='contactUs_hero_section_text'>
                    <p>WHERE TO FIND US</p>
                    <h2>Contact Us</h2>
                </div>
            </div>
        </section>
        {/* Contact Form _______________ */}
        <ContactForm/>
        </>
    );
};

export default ContactUs;
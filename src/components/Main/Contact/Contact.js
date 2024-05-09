import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { contact } from '~/portfolio';

const cx = classNames.bind(styles);

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_qurozck', 'template_hvlb99p', form.current, {
                publicKey: 'MXk-1X_nmkiXocKYv',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    const notify = () => {
        toast.success('You have sent me an email!');
    };

    if (!contact.email) return null;
    return (
        <section className={cx('section', 'contact', 'center')} id="contact">
            <h2 className={cx('section__title')}>Contact</h2>
            {/* <a href={`mailto:${contact.email}`}>
                <span type="button" className={cx('btn', 'btn--outline')}>
                    Email me!
                </span>
            </a> */}
            <form ref={form} onSubmit={sendEmail} className={cx('Contact-form')}>
                <label>Name</label>
                <input type="text" name="user_name" className={cx('contact-item')} />
                <label>Email</label>
                <input type="email" name="user_email" className={cx('contact-item')} />
                <label>Message</label>
                <textarea name="message" className={cx('contact-item', 'text')} />
                <button type="submit" className={cx('btn', 'btn--outline', 'btn--submit')} onClick={notify}>
                    Contact me!
                </button>
                <ToastContainer 
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar={true}
                />
            </form>
        </section>
    );
};

export default Contact;

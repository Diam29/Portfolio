import React, { useState } from 'react'
import "./styles.scss";
import PageHeader from '../PageHeader/PageHeader';
import { HiCursorClick } from 'react-icons/hi';
import { Animate } from 'react-simple-animate'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion';

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();



        const serviceId = 'service_l94tb4b'
        const templateId = 'template_b6i2wae'
        const publicKey = '9MPdDlhQ0Eh2hE8VB'




        emailjs
            .sendForm(serviceId, templateId, document.querySelector('form'), publicKey)
            .then((result) => {
                setName("");
                setEmail("");
                setMessage("");
                console.log(result.text);

            }, (error) => {
                alert(error.text);
                console.log(error.text);
            });

    };






    return (
        <section id="contact" className="contact">
            <PageHeader
                headerText="Contact Me"
                icon={<HiCursorClick size={40} />}
            />
            <form className='contact__content' onSubmit={handleSubmit}>
                <div className='contact__content'>
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{ transform: 'traslateX(-200px)' }}
                        end={{ transform: 'translateY(0px)' }}>

                        <h3 className='contact__content__header-text'>Hablemos</h3>
                    </Animate>
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{ transform: 'traslateX(200px)' }}
                        end={{ transform: 'translateY(0px)' }}>
                        <div className='contact__content__form'>
                            <div className='contact__content__form__controlswrapper'>
                                <div className='namewrapper'>
                                    <input required name='user_name' className='inputName' onChange={(e) => setName(e.target.value)} value={name} />
                                    <label className='nameLabel'>Name</label>
                                </div>
                                <div className='emailwrapper'>
                                    <input required name='user_email' className='inputEmail' onChange={(e) => setEmail(e.target.value)} value={email} />
                                    <label className='emailLabel'>Email</label>
                                </div>
                                <div className='descriptionwrapper'>
                                    <textarea required name="message" className='inputDescription' cols="30" rows="10" onChange={(e) => setMessage(e.target.value)} value={message} />
                                    <label className='descriptionLabel'>Description</label>
                                </div>
                            </div>
                            <button type='submit'>Submit</button>
                        </div>
                    </Animate>
                </div>
            </form>
        </section >
    )
}

export default Contact

import React from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import face from '../../img/Foto-1.png'
import { FaInstagram } from 'react-icons/fa6'
import { FaGithubSquare } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'
import { BsFillEnvelopeAtFill, BsWhatsapp } from 'react-icons/bs'

const Home = () => {

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I´m Diamela
          <br />
          Full Stack Developer
        </h1>
        <motion.div
          animate={{ y: 100 }}
          transition={{ duration: .5 }}>
          <motion.h2
            animate={{ y: -10 }}
            transition={{ duration: .5 }}
            className="home__contact-me">Hire Me</motion.h2>
        </motion.div>
        <motion.div
          animate={{ y: -5 }}
          transition={{ duration: .3 }}
          className="home__social">
          <nav className="social__icons">
            <Link to={'https://www.linkedin.com/in/diamela-villalba-b96a71251/'} target={'_blank'} className="social__icons" ><IoLogoLinkedin size={50} color={'var(--yellow-theme-main-color)'} /></Link>
            <Link to={'https://github.com/Diam29'} target={'_blank'}><FaGithubSquare size={50} className="social__icons" color={'var(--yellow-theme-main-color)'} /></Link>
            <Link to={'https://www.instagram.com/diamelavp/'} target={'_blank'}><FaInstagram size={50} className="social__icons" color={'var(--yellow-theme-main-color)'} /></Link>
            <Link to={'https://api.whatsapp.com/send?phone=5492234546521&text=Hola te escribo desde tu web!!'} target="_blank"> <BsWhatsapp size={50} className="social__icons" color={'var(--yellow-theme-main-color)'} /></Link>
            <Link to={'/contact'} ><BsFillEnvelopeAtFill size={50} className="social__icons" color={'var(--yellow-theme-main-color)'} /></Link>
          </nav>
        </motion.div>
      </div>
    </section >
  );
}

export default Home;

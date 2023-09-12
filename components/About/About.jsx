import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import { motion } from "framer-motion";
import './styles.scss'
import { HiOutlineIdentification } from 'react-icons/hi'
import logo from '../../img/Foto-1.png'

const personalDetail = [
    {
        label: 'Name: ',
        value: 'Diamela Villalba'
    },
    {
        label: 'Address: ',
        value: 'Argentina'
    },
    {
        label: 'Email: ',
        value: 'diamelavlioi@gmail.com'
    },
    {
        label: 'Phone: ',
        value: '+54 9 223 4546521'
    }
]

const jobSummary = 'As a passionate software developer, I am deeply enthusiastic about creating and developing software applications. I am constantly learning and experimenting with new technologies and approaches, and have a strong desire to create innovative and effective solutions to complex problems. Driven by my curiosity and love of problem solving, I am committed to producing high-quality, well-designed software that meets the needs of users.'



const About = () => {
    return (
        <section id="about" className="about">
            <PageHeader
                headerText="About Me"
                icon={<HiOutlineIdentification size={40} />}
            />
            <div className="about__content__personalWrapper">

                <motion.div
                    animate={{ y: 20, x: 30 }}
                    transition={{ duration: 3 }}
                    className="about__content__personalWrapper">
                    <h3>Full Stack Developer</h3>
                </motion.div>
                <motion.div
                    animate={{ y: 10, x: 30 }}
                    transition={{ duration: 3 }}
                    className="about__content">
                    <p>{jobSummary}</p>
                </motion.div>
                <motion.h3
                    animate={{ y: 357, x: 30 }}
                    transition={{ duration: 3 }}
                    className="personalInformationText"
                >Personal Information</motion.h3>
                <motion.ul
                    animate={{ y: 350, x: 50 }}
                    transition={{ duration: 3 }}
                >
                    {
                        personalDetail.map((detail, index) =>
                        (<li key={index}>
                            <span className="title">{detail.label}</span>
                            <span className="value">{detail.value}</span>
                        </li>))
                    }
                    <motion.div
                        animate={{ y: -160, x: -260 }}
                        transition={{ duration: 3 }}
                        className="about__content__servicesWrappper">
                        <img className="about__content__servicesWrappper__innerContent" src={logo} alt="logo" size={40} />
                    </motion.div>
                </motion.ul>
                {/* <div className="about__content__servicesWrappper">
                    <div className="about__content__servicesWrappper__innerContent">
                        <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                    <div>
                        <DiPostgresql size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                    <div>
                        <DiNodejs size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                    <div>
                        <DiNodejsSmall size={60} color="var(--yellow-theme-main-color)" />
                    </div>
                </div> */}
            </div>
        </section >
    );
};


export default About;

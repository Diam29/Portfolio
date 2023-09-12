import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { HiOutlineCode } from 'react-icons/hi';
import { motion } from 'framer-motion'
import { Line } from 'rc-progress'
import './styles.scss'


const skillsData = [
    {
        label: 'FRONT END',
        data: [
            {
                skillName: 'HTML',
                percentage: '90'
            },
            {
                skillName: 'CSS',
                percentage: '60'
            },
            {
                skillName: 'JAVASCRIPT',
                percentage: '100'
            },
            {
                skillName: 'REACT',
                percentage: '90'
            },
            {
                skillName: 'REDUX',
                percentage: '80'
            },
        ]
    },
    {
        label: 'BACK END',
        data: [
            {
                skillName: 'NODE.JS',
                percentage: '85',
            },
            {
                skillName: 'EXPRESS.JS',
                percentage: '90',
            },
            {
                skillName: 'POSTGRESSQL',
                percentage: '100',
            },
            {
                skillName: 'MONGODB',
                percentage: '60',
            },
            {
                skillName: 'MONGOOSE',
                percentage: '60',
            },
        ]
    }
]


const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeader
                headerText="My Skills"
                icon={<HiOutlineCode size={40} />}
            />
            <motion.div
                // initial={{ y: 30 }}
                animate={{ y: -20 }}
                transition={{ duration: 2 }}

                className='skills__content-wrapper'>
                {
                    skillsData.map((item, i) => (
                        <div key={i} className='skills__content-wrapper__inner-content'>
                            <h3 className='skills__content-wrapper__inner-content__category-text'>{item.label}</h3>
                            <div className='skills__content-wrapper__inner-content__progressbar-container'>
                                {
                                    item.data.map((skillItem, j) => (
                                        <div className='progressbar-wrapper' key={j}>
                                            <p>{skillItem.skillName}</p>
                                            <Line
                                                percent={skillItem.percentage}
                                                strokeWidth="2"
                                                strokeColor="var(--yellow-theme-main-color)"
                                                trialWidth="2"
                                                strokeLinecap="square"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Skills;

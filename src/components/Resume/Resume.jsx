import React from 'react'
import PageHeader from '../PageHeader/PageHeader';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './styles.scss'
import { FiCheckSquare } from 'react-icons/fi'
import { HiOutlineLibrary } from 'react-icons/hi'
const data = {
    experience: [
        {
            title: 'Junior Backend',
            subTitle: 'Buenos Aires, Argentina',
            description: 'Web development, Databases, Backend development'
        },
        {
            title: 'Proyect Manager Backend',
            subTitle: 'Buenos Aires, Argentina',
            description: "Backend Development, Web Development, DataBase Management Systems. For Workify"
        },
        {
            title: "Full Stack Developer",
            subTitle: 'Buenos Aires, Argentina',
            description: 'Frontend and backend web development. I have been working for CriandoSolas'
        },
    ]
}

const dataEducation = {
    education: [
        {
            title: "Bootcamp",
            subTitle: 'Henry Academy, Buenos Aires, Argentina',
            description: 'Full Stack Developer'
        },
        {
            title: 'University',
            subTitle: 'Caece University, Mar del Plata, Argentina',
            description: "Bachelor´s degree in marketing"
        },
        {
            title: 'High School',
            subTitle: 'Santa Cecilia, Mar del Plata, Argentina',
            description: 'Bachelor´s degree in business management and administration'
        },
    ]
}

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeader
                headerText="My Resume"
                icon={<HiOutlineLibrary size={40} />}
            />
            <div className='timeline'>
                <div className='timeline__experience'>
                    <h3 className='timeline__experience__header-text'>Experience</h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor='var(--yellow-theme-main-color)'
                    >
                        {
                            dataEducation.education.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className='timeline__experience__vertical-timeline-element'
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var(--yellow-theme-main-color)'
                                    }}
                                    date='Complete'
                                    icon={<FiCheckSquare />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-main-color)'
                                    }}
                                >
                                    <div className='vertical-timeline-element-title-wrapper'>
                                        <h3>{item.title}</h3>

                                        <h4>{item.subTitle}</h4>
                                    </div>
                                    <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>
                </div>
                <div className='timeline__education'>
                    <h3 className='timeline__education__header-text'>Education</h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor='var(--yellow-theme-main-color)'
                    >
                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className='timeline__experience__vertical-timeline-element'
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var(--yellow-theme-main-color)'
                                    }}
                                    date='2023 - Present'
                                    icon={<FiCheckSquare />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-main-color)'
                                    }}
                                >
                                    <div className='vertical-timeline-element-title-wrapper'>
                                        <h3>{item.title}</h3>

                                        <h4>{item.subTitle}</h4>
                                    </div>
                                    <p className='vertical-timeline-element-title-wrapper-description'>{item.description}</p>
                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>
                </div>
            </div>
        </section >
    )
}

export default Resume

import React, { useState } from 'react'
import PageHeader from '../PageHeader/PageHeader';
import { DiGitBranch } from 'react-icons/di'
import imageOne from '../../img/DogsAppImage.jpg'
import imageTwo from '../../img/WorkifyImage.png'
import imageThree from '../../img/WebRegister.png'
import imageFour from '../../img/Saludo-1.png'
import './styles.scss'

const portfolioData = [
    {
        id: 1,
        name: 'DogsApp',
        image: imageOne,
        link: 'https://app-dogs-red.vercel.app/'
    },
    {
        id: 2,
        name: 'Workify',
        image: imageTwo,
        link: 'https://workify-frontend-pcik.vercel.app/'
    },
    {
        id: 3,
        name: 'Otro',
        image: imageThree,
        link: 'https://web-register-iota.vercel.app/'
    },
    {
        id: 4,
        name: "CriandoSolas",
        image: imageFour,
        link: ''
    }
]

const filterData = [
    {
        filterId: 1,
        label: 'all'
    },
    {
        filterId: 2,
        label: 'Bootcamp Projects'
    },
    {
        filterId: 3,
        label: "Independent Projects"
    },
]
const Proyects = () => {

    const [filteredValue, setFilteredValue] = useState(1);

    const [hoveredValue, setHoveredValue] = useState(null)

    function handlerVisitProject(link) {
        window.open(link, '_blank');
    }

    function handlerFilter(currentId) {
        setFilteredValue(currentId)
    }

    function handlerHover(index) {
        setHoveredValue(index)
    }

    const filteredItems = filteredValue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredValue)

    return (
        <section id="portfolio" className="portfolio">
            <PageHeader
                headerText="My Proyects"
                icon={<DiGitBranch size={40} />}
            />
            <div className='portfolio__content'>
                <ul className='portfolio__content__filter'>
                    {
                        filterData.map(item => (
                            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={() => handlerFilter(item.filterId)} key={item.filterId}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
                <div className='portfolio__content__cards'>
                    {
                        filteredItems.map((item, index) => (
                            <div className='portfolio__content__cards__item' key={`cardItem${item.name.trim()}`} onMouseEnter={() => handlerHover(index)} onMouseLeave={() => handlerHover(null)}>
                                <div className='portfolio__content__cards__item__img-wrapper'>
                                    <a>
                                        <img alt="image" src={item.image} />
                                    </a>
                                </div>
                                <div className='overlay'>
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button onClick={() => handlerVisitProject(item.link)}>Visit</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Proyects

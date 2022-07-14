import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const about = () => {
    return (
        <section id='about'>
            <h5>All About My Arena</h5>
            <h2>About Me</h2>
            <div className='container about__container'>

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>

                </div>
                <div className="about__content">

                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Proficiency</h5>
                            <small>Several Years And some Months</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Patrons</h5>
                            <small>Globally</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Propositions</h5>
                            <small>1k+++</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, adipisci eum dolores sequi, esse dolorem reprehenderit nobis atque placeat, pariatur voluptatibus optio illo facilis. Soluta aliquid laborum harum suscipit! Consequuntur?</p>
                    <a href="contact" className='btn btn-primary'>Hit Me Up</a>
                </div>
            </div>

        </section>
    )
}

export default about
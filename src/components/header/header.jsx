import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hi There This Is</h5>
                <h1>Kylie Spears</h1>
                <h5 className="text-light">Software Engineer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
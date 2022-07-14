import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
const footer = () => {
    return (
        <footer>
            <a href="" className='footer__logo'>KYLIE</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#Experience">Proficiency</a></li>
                <li><a href="#services">Amenities</a></li>
                <li><a href="#portfolio">Repository</a></li>
                <li><a href="#testimonials">Endorsements</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://instagram.com"><FiInstagram /></a>
                <a href="https://twitter.com"><IoLogoTwitter /></a>
            </div>
            <div className="footer__copyright">
                <small>
                    Created by <sup><b />FEROOZ</sup> <sub>WANI</sub><br /><br /> All right reserved

                </small>
            </div>
        </footer>
    )
}

export default footer
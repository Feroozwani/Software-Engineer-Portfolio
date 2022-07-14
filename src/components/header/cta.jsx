import React from 'react'
import CV from '../../assets/cv.pdf'
const cta = () => {
    return (
        <div className='cta'>

            <a href={CV} download className='btn'>Smash To Execute CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Interact</a>



        </div>
    )
}

export default cta
import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.png'
import AVT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const data = [

    {
        avatar: AVT1,

        name: 'Amber Smith',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique soluta nemo culpa hic minus amet laudantium obcaecati saepe aliquid earum veritatis consequuntur perferendis possimus deleniti id repellendus eius dolor ullam, quae consectetur fuga reprehenderit commodi porro? Unde, aperiam vero.'

    },
    {
        avatar: AVT2,

        name: 'Kate Spencer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique soluta nemo culpa hic minus amet laudantium obcaecati saepe aliquid earum veritatis consequuntur perferendis possimus deleniti id repellendus eius dolor ullam, quae consectetur fuga reprehenderit commodi porro? Unde, aperiam vero.'

    },
    {
        avatar: AVT3,

        name: 'Jade Will',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique soluta nemo culpa hic minus amet laudantium obcaecati saepe aliquid earum veritatis consequuntur perferendis possimus deleniti id repellendus eius dolor ullam, quae consectetur fuga reprehenderit commodi porro? Unde, aperiam vero.'

    },
    {
        avatar: AVT4,

        name: 'William Skirt',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique soluta nemo culpa hic minus amet laudantium obcaecati saepe aliquid earum veritatis consequuntur perferendis possimus deleniti id repellendus eius dolor ullam, quae consectetur fuga reprehenderit commodi porro? Unde, aperiam vero.'

    },

]


const testimonials = () => {
    return (
        <section id='testimonials'>

            <h5>Patrons Suggestions</h5>
            <h2>Endorsements</h2>
            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >

                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>

                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>

                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>


        </section>
    )
}

export default testimonials
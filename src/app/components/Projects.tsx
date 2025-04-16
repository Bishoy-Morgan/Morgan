'use client'

import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const Projects: React.FC = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        // loop: true,
        slides: {
        perView: 1.7,
        spacing: 20,
        },
    })

    return (
        <section className='w-full h-dvh flex items-center justify-center bg-[#f2f2f2] px-8 '>
            <div className='w-full h-3/4 flex items-center justify-center overflow-hidden'>
                <div ref={sliderRef} className='keen-slider w-full h-full rounded-xl '>

                    <div className='keen-slider__slide flex items-center justify-center text-white text-2xl font-bold bg-[#333] rounded-xl '>
                        Project 1
                    </div>
                    <div className='keen-slider__slide flex items-center justify-center text-white text-2xl font-bold bg-[#444] rounded-xl '>
                        Project 2
                    </div>
                    <div className='keen-slider__slide flex items-center justify-center text-white text-2xl font-bold bg-[#555] rounded-xl '>
                        Project 3
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects

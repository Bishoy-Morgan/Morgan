'use client'
import Image from 'next/image'
import React from 'react'
import arrow from '@/public/icons/right-arrow.svg'

const About: React.FC = () => {
    const [activeCategory, setActiveCategory] = React.useState<string | null>('everyone')

    const content: { [key: string]: string } = {
        everyone: "Welcome! This space is designed for everyone curious about innovative digital experiences. Explore how creativity meets functionality here.",
        recruiters: "Dear recruiters, I'm a results-driven Digital Creative Director with a passion for user-centric design and seamless digital solutions.",
        agencies: "For agencies looking for collaboration — I bring fresh ideas, strategic thinking, and hands-on expertise to elevate your projects.",
        clients: "To my clients — your vision fuels my creativity. Let's transform ideas into impactful digital experiences together.",
        collaborators: "Collaborators, join me in pushing creative boundaries and building meaningful, human-centered digital products."
    }

    const buttons = [
        { label: "For Everyone", value: "everyone" },
        { label: "Recruiters", value: "recruiters" },
        { label: "Agencies", value: "agencies" },
        { label: "Clients", value: "clients" },
        { label: "Collaborators", value: "collaborators" }
    ]

    return (
        <section className='w-full h-dvh flex flex-col items-center justify-center rounded-t-4xl bg-[#f2f2f2] p-6'>
            <div className='w-4/5 flex flex-col gap-2 items-start justify-start mb-6 '>
                <div className='flex items-center justify-start gap-2 w-full mb-[3%]'>
                    {buttons.map((button) => (
                        <button
                            key={button.value}
                            onClick={() => setActiveCategory(button.value)}
                            className={`text-base leading-5 px-3 py-2 rounded-full transition-all duration-200
                            ${activeCategory === button.value 
                                ? 'bg-[#0a0a0a] text-[#f2f2f2]' 
                                : 'bg-transparent text-[#0a0a0a]'}`}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>

                {activeCategory && (
                    <div className='p2 w-full text-left text-[#0a0a0a] max-w-1/2 '>
                        <p>{content[activeCategory]}</p>
                    </div>
                )}
                <div className='w-full flex items-center justify-end gap-2 '>
                    <label className='p3 text-[#0a0a0a]/70 cursor-pointer '>
                        View my work
                    </label>
                    <button className='flex items-center justify-center rounded-full border-[#0a0a0a]/70 border p-3'>
                        <Image 
                        src={arrow}
                        alt='Arrow pointing to the right'
                        width={16}
                        height={16}
                        />
                    </button>
                </div>
            </div>

            
        </section>
    )
}

export default About

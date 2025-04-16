'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import morgan from '@/public/images/morgan-transparent.png'

// type NavbarProps = {
//     isHeroVisible: boolean
// }

const Navbar: React.FC = () => {
    const [isHeroVisible, setIsHeroVisible] = useState(true); // Track visibility of the hero section

    useEffect(() => {
        const heroElement = document.getElementById('hero'); // Get the hero section by its ID

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                // If the hero section is not in the viewport, change the navbar color
                setIsHeroVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // Trigger when 50% of the hero section is visible
        );

        if (heroElement) {
            observer.observe(heroElement); // Start observing the hero section
        }

        return () => {
            if (heroElement) {
                observer.unobserve(heroElement); // Cleanup observer on component unmount
            }
        };
    }, []);

    return (
        <div className='fixed top-[2%] left-0 w-full h-16 flex items-center justify-between px-8 '>
            <div>
                <Image 
                src={morgan}
                alt='Logo'
                width={120}
                height={60}
                priority={true}
                quality={100}
                className={`${isHeroVisible ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-in-out`}
                />
            </div>
            <div className='w-1/5 flex items-center justify-end gap-[10%]'>
                <ul className={`${isHeroVisible ? 'text-[#f2f2f2]' : 'text-[#0a0a0a]'} flex items-center gap-8 `}>
                    <li className='p1 '>Work</li>
                    <li className='p1 '>Background</li>
                </ul>
                <button className={`btn-primary rounded-full ${
                    isHeroVisible ? 'text-[#f2f2f2]' : 'text-[#0a0a0a]'
                    }`}>
                    Resume
                </button>
            </div>
        </div>
    )
}

export default Navbar

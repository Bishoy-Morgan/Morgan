import Image from 'next/image'
import React from 'react'
import morgan from '@/public/images/morgan-black.png'
import Link from 'next/link'
import linkedin from '@/public/icons/linkedin.svg'
import whatsapp from '@/public/icons/whatsapp.svg'
import github from '@/public/icons/github.svg'




const HeroSection = () => {
    return (
        <section id='heroSection' className='w-full h-dvh pb-[4%] flex items-end justify-center'>
            <div className='w-4/5 h-4/5 '>
                <div className='w-full h-3/4 flex items-center justify-center '>

                </div>
                <div className='w-full h-1/4 flex items-end justify-between '>
                    <div className='relative w-1/3 h-full flex items-end '>
                        <Image 
                        src={morgan}
                        alt='Logo'
                        width={500}
                        height={100}
                        priority={true}
                        quality={100}
                        />
                    </div>
                    <div className='w-1/5 h-full flex items-end justify-end space-x-3 '>
                        <Link href={`/`} className='bg-[#f2f2f2] rounded p-[0.3rem] '>
                            <Image 
                            src={linkedin}
                            alt='LinkedIn'
                            width={22}
                            height={22}
                            />
                        </Link>
                        <Link href={`/`} className='bg-[#f2f2f2] rounded p-[0.3rem] '>
                            <Image 
                            src={github}
                            alt='Github'
                            width={22}
                            height={22}
                            />
                        </Link>
                        <Link href={`/`} className='bg-[#f2f2f2] rounded p-[0.3rem] '>
                            <Image 
                            src={whatsapp}
                            alt='WhatsApp'
                            width={22}
                            height={22}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

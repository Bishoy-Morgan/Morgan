import React from 'react'

const Capability = () => {
    const capabilities: string[] = [
        "UI/UX Design",
        "Responsive Web Design",
        "Wireframing & Prototyping",
        "Branding & Visual Identity",
        "Interactive & Motion Design",
        "Frontend Development",
        "Backend Integration",
        "Performance Optimization",
        "Multilingual / RTL Web Development",
        "Clean, Maintainable Code Practices",
        "Digital Product Strategy",
        "Creative Direction",
        "User-Centered Problem Solving",
        "Cross-team Collaboration",
        "Landing Page Optimization",
        "Conversion-focused Design",
        "SEO Best Practices",
        "Analytics Integration"
    ]
    return (
        <div className='w-full h-dvh flex items-center justify-center bg-[#f2f2f2]  '>
            <div className='relative w-4/5 h-3/4 flex justify-between border-2 border-amber-400 overflow-scroll hide-scrollbar'>
                <div className='sticky top-0 left-0 w-[45%] h-1/5 flex flex-col items-start space-y-3  '>
                    <h2 className='font-medium'>Capability</h2>
                    <span className='text-base leading-5.5 text-[#0a0a0a]/80 font-light'>Here&apos;s what I bring to the table</span>
                </div>
                <div className='w-[55%] h-full flex flex-col items-strat space-y-3 pl-[5%] bg-gray-300 '>
                    {capabilities.map((capability, index) => (
                        <h3 key={index} className='font-light hover:font-medium hover:-translate-x-6 transition-transform duration-500 ease-in-out '>
                            {capability}
                        </h3>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Capability

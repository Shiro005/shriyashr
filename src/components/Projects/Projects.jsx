import React from 'react'
import { Copy, ArrowRight } from 'lucide-react'

export function Projects() {
    const projects = [
        {
            title: 'WebReich Community',
            description: 'For Slove Realtime problem Purpose (Education Sector)',
            Technologies: 'Vanilla JS | Node JS | API | ElephantSQL | EJS | GIT | Github',
            logo:'https://cdn-icons-png.flaticon.com/128/9856/9856433.png',
            key_features: 'Used by 150+ students',
            github_code: 'https://github.com/Shiro005/vercelHost.git',
            live_link: 'https://webreich.vercel.app/'
        },
        {
            title: 'Currency Converter',
            description: 'React Js Application better UI/UX design and frontend tech',
            Technologies: 'React Js | GIT | Github | API',
            logo:'https://cdn-icons-png.flaticon.com/128/9798/9798009.png',
            key_features: 'Fetch live data from API and used in application using custom hooks in react js according to user requriments',
            github_code: 'https://github.com/Shiro005/vercelHost.git',
            live_link: 'https://webreich.vercel.app/'
        },
        {
            title: 'Password Generator',
            description: 'React Js Application better UI/UX design and frontend tech',
            Technologies: 'React Js | GIT | Github',
            logo:'https://cdn-icons-png.flaticon.com/128/3914/3914500.png',
            key_features: 'Random password generator with every refresh, allowed numbers characters, symbols with user requriments',
            github_code: 'https://github.com/Shiro005/vercelHost.git',
            live_link: 'https://webreich.vercel.app/'
        }
    ]

    let length_p = projects.length

    return (
        <>
            <div className='bg-gray-950 p-5 text-white'>
                <div className="p-5 md:px-6 md:py-10 bg-white rounded-lg">
                    <h1 className="text-2xl font-bold capitalize text-black lg:text-3xl">
                        Project Highlights
                    </h1>
                    <p className="my-2 text-gray-600">
                        My projects reflect my dedication to creating seamless, user-friendly applications. I am always eager to learn and take on new challenges, and I strive to keep up with the latest industry trends and best practices.
                    </p>
                    <hr />
                    <div className="flex flex-row flex-wrap items-center justify-around">
                        {Array.from({ length: length_p }).map((_, i) => (
                            <div key={i} className="space-y-3 border-3 border-white my-4">
                                <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
                                   <img src={projects[i].logo} alt="" height={40} width={40} />
                                </span>
                                <h1 className="text-xl font-semibold capitalize text-black">{projects[i].title}</h1>
                                <p className="text-sm text-gray-600">
                                    {projects[i].description}
                                </p>
                                <a
                                    href="#"
                                    className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
                                >
                                    <span className="mx-1">read more</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

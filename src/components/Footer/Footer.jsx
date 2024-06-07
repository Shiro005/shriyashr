import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Footer.css'
import { ChevronRight } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row custom_footer">
                
                <div className="footer_container">
                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-semibold text-gray-700 ">Links</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="about"><li>About us</li></Link>
                            <Link to=""><li>Projects</li></Link>
                            <Link to="coffee"><li>Buy me a Coffee</li></Link>
                            <Link to=""><li>Contact Me</li></Link>
                        </ul>
                    </div>

                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-semibold text-gray-700 ">Projects</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                            <li>WebReich</li>
                            <li>React Js 10 +</li>
                            <li>Node Js</li>
                            <li>Portfolio</li>
                            <li>Portfolio</li>

                        </ul>
                    </div>

                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-semibold text-gray-700 ">Social Links</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                            <li>LinkdeIn</li>
                            <li>Github</li>
                            <li>Discord</li>
                            <li>Youtube</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
                <div className="inline-flex items-center">

                    <span className="ml-4 text-lg font-bold">Shriyash R.</span>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="text-sm font-medium text-gray-500">© 2024 shriyashrulhe All rights reserved.</p>
                </div>
            </div>
        </footer>


    );
}
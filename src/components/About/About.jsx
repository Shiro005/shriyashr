import React from 'react';
import './About.css';
import { Pagination } from '../pagination/Pagination';
import AboutData from '../AboutData/AboutData';
import { motion } from 'framer-motion';

export default function About() {
    const eduction = [
        {
            name: 'Graduation',
            title: 'Sant Gadge Baba Amravati University , Amravati',
            department: 'Shankarlal Khandelwal College of Akola',
            email: 'B.Sc Computer Science',
            role: '62.30 %',
            status: 'Active',
            color: 'red',
            colorBG: '#F8C9CD',
            image: 'https://cdn-icons-png.flaticon.com/128/1940/1940611.png',
        },
        {
            name: 'HSC',
            title: 'Sant Gadge Baba Amravati University,Amravati',
            department: 'S.R patil College',
            email: 'XII',
            role: '87.20 %',
            status: 'Completed',
            color: 'green',
            colorBG: '#E3FBE3',
            image: 'https://cdn-icons-png.flaticon.com/128/1940/1940611.png',
        },
        {
            name: 'SSC',
            title: 'Sant Gadge Baba Amravati University,Amravati',
            department: 'Hindu Dnyanpeet Convent Akola',
            email: 'X',
            role: '75.20 %',
            status: 'Completed',
            color: 'green',
            colorBG: '#E3FBE3',
            image: 'https://cdn-icons-png.flaticon.com/128/1940/1940611.png',
        }
    ];


    const people = [
        {
            name: 'Shriyash Rulhe',
            title: 'WebReich Community',
            department: 'Engineering',
            email: 'shriyashrulhe145@gmail.com',
            role: 'Tech Lead',
            status: 'Active',
            color: 'red',
            colorBG: '#F8C9CD',
            image: 'https://cdn-icons-png.flaticon.com/128/9790/9790766.png',
        },
        {
            name: 'Shriyash Rulhe',
            title: 'Dainmart.com',
            department: 'Engineering',
            email: 'shriyashrulhe14@gmail.com',
            role: 'React Js Developer',
            status: 'Completed',
            color: 'green',
            colorBG: '#E3FBE3',
            image: 'https://cdn-icons-png.flaticon.com/128/9790/9790766.png',
        },
        {
            name: 'Shriyash Rulhe',
            title: 'NullClass',
            department: 'Engineering',
            email: 'shriyashrulhe14@gmail.com',
            role: 'Frontend Developer',
            status: 'Completed',
            color: 'green',
            colorBG: '#E3FBE3',
            image: 'https://cdn-icons-png.flaticon.com/128/9790/9790766.png',
        },
    ];

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="custom_about_container"
            >
                <div className="about_img">
                    <img src="src/assets/about_img.jpg" alt="Getting Started" className="rounded-lg" />
                </div>

                <div className="space-y-7">
                    <p className="text-sm font-semibold md:text-base">Full Stack Web Developer →</p>

                    <p className="text-3xl font-bold md:text-4xl">
                        Know About Me
                    </p>
                    <p className="text-base text-gray-200 md:text-lg">
                        Computer science student at <strong className='text-yellow-600'>Sant Gadge Baba Amravati University, Maharashtra</strong> , specializing in web development.  <strong className='text-yellow-600'>Founder of WebReich</strong>, a vibrant coding community with  <strong className='text-yellow-600'>150+ students.</strong> Proficient in full stack development with strong  <strong className='text-yellow-600'>leadership and communication </strong> skills. Eager to apply my expertise to impactful projects. Known for my effective  <strong className='text-yellow-600'> communication, problem-solving </strong> abilities, and dedication to fostering a collaborative learning environment.
                    </p>
                </div>

                <AboutData
                    people={people}
                    box_heading={"Professional Experience"}
                    a1={"Employee"}
                    a2={"Title"}
                    a3={"Status"}
                    a4={"Role"}
                />

                <AboutData
                    people={eduction}
                    box_heading={"Education & Certifications"}
                    a1={"Degree"}
                    a2={"University"}
                    a3={"Status"}
                    a4={"Percentage"}
                />

                <p className="text-sm font-semibold md:text-base mx-4">shriyashrulhe145@gmail.com</p>
                <p className="mx-4 text-sm font-semibold md:text-base">Akola, Maharashtra 444-004</p>
                <Pagination result={"About"} next={"/contact"} prev={"/"} />
            </motion.div>
        </>
    );
}

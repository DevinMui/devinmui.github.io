import React, { useEffect } from 'react'

import './about.css'

import Me from './me'
import Skills from './skills'
import Social from './social'

function About() {
    useEffect(() => {
        document.title = 'Devin Mui | About Me'
    })
    return (
        <>
            <Me />
            <Skills />
            <Social />
        </>
    )
}

export default About

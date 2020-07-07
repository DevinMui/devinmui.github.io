import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import 'lightgallery.js/dist/css/lightgallery.min.css'

import Hero from './components/hero'
import About from './components/about'
import WhatIDo from './components/what-i-do'
import Projects from './components/projects'
import Contact from './components/contact'

function Home(props: any) {
    useEffect(() => {
        document.title = 'Devin Mui | ~Graphic Design is My Passion~'
        const hash = props.location.hash
        console.log(hash)
        if (hash) {
            const el = document.querySelector(hash)
            if (el) el.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }
    })
    return (
        <>
            <Hero />
            <About />
            <WhatIDo />
            <Projects />
            <Contact />
        </>
    )
}

export default withRouter(Home)

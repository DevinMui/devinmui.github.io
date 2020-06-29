import React from 'react'

import 'lightgallery.js/dist/css/lightgallery.min.css'

import Hero from './components/hero'
import About from './components/about'
import WhatIDo from './components/what-i-do'
import Projects from './components/projects'
import Contact from './components/contact'

function Home() {
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

export default Home

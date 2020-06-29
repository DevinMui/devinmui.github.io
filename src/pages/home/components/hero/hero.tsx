import React from 'react'

function Hero() {
    return (
        <section className="hero">
            <img
                alt="hero background"
                src="./img/hero.svg"
                className="hero-img"
            />
            <div className="hero-text">
                <h1>Software Engineer</h1>
                <p>Let's Build Cool Things Together</p>
            </div>
        </section>
    )
}

export default Hero

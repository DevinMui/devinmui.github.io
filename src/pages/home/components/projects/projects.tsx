import React, { useRef, useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import ProjectData from './projects-data'

require('lightgallery.js')

function Caption(props: any) {
    return (
        <div className={`caption${props.number}`}>
            <h4>
                <a href={props.href} target="_blank" rel="noopener noreferrer">
                    {props.title}
                </a>
            </h4>
            <p dangerouslySetInnerHTML={{ __html: props.description }} />
        </div>
    )
}

function Project(props: any) {
    return (
        <Col
            md={3}
            xs={6}
            className="mx-auto"
            data-src={props.img}
            data-sub-html={`.caption${props.number}`}
        >
            <div className="img-container">
                {/* bootstrap search icon */}
                <svg
                    width="2em"
                    height="2em"
                    viewBox="0 0 16 16"
                    className="bi bi-search"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                    />
                    <path
                        fillRule="evenodd"
                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />
                </svg>
                <div className="img-fluid overlay"></div>
                <img alt={props.title} className="img-fluid" src={props.img} />
            </div>
        </Col>
    )
}

function Projects() {
    const galleryRef = useRef<any>(null) // what is the type of row
    useEffect(() => {
        ;(window as any).lightGallery(galleryRef.current, {
            thumbnail: true,
        })
    })

    return (
        <Container id="projects" as="section">
            <h2 className="text-center">What have I built?</h2>

            <div style={{ display: 'none' }}>
                {ProjectData.map((data: any, i: number) => {
                    return (
                        <Caption
                            key={`caption${i}`}
                            title={data.title}
                            description={data.description}
                            href={data.href}
                            number={i}
                        />
                    )
                })}
            </div>

            <Row xs={2} id="project-thumbnails" ref={galleryRef}>
                {ProjectData.map((data: any, i: number) => {
                    return (
                        <Project
                            key={`project${i}`}
                            title={data.title}
                            description={data.description}
                            img={data.img}
                            number={i}
                        />
                    )
                })}
            </Row>
        </Container>
    )
}

export default Projects

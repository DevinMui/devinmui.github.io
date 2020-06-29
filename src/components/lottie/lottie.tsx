import React, { useRef, useEffect } from 'react'
import lottie, { AnimationConfigWithData } from 'lottie-web'

type LottieProps = {
    frames?: number
}

type AnimationConfig = Omit<AnimationConfigWithData, 'container'>

function Lottie({
    frames = 0,
    loop = true,
    autoplay = true,
    ...props
}: LottieProps & AnimationConfig) {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const anim = lottie.loadAnimation({
            animationData: props.animationData,
            loop: loop,
            autoplay: autoplay,
            renderer: props.renderer,
            name: props.name,
            container: ref.current as Element,
        })
        anim.goToAndPlay(frames, true)
        return () => {
            anim.destroy()
        }
    })
    return <div ref={ref}></div>
}

export default Lottie

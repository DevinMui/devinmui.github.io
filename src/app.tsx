import React, { useRef, useState, useEffect, useCallback } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { DarkTheme, LightTheme } from './components/themes'

import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'

const GlobalStyles = createGlobalStyle`
    :root {
        --background-color: ${({ theme }: any) => theme.body};
        --text-color: ${({ theme }: any) => theme.text};
        --main-color: ${({ theme }: any) => theme.accent};
        --nav-link-color: ${({ theme }: any) => theme.text};
        transition: all 0.5s ease;
    }
`

function App() {
    const [theme, setTheme] = useState('light')
    let inputStr = useRef('')
    const correctStr = 'fuckjavascript'

    function setMode(theme: string) {
        ;(window as any).localStorage.setItem('theme', theme)
        setTheme(theme)
    }

    const toggleTheme = useCallback(() => {
        theme === 'light' ? setMode('dark') : setMode('light')
    }, [theme])

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        localTheme && setTheme(localTheme)

        function handleKeyboard(e: any) {
            inputStr.current += String.fromCharCode(e.keyCode).toLowerCase()
            if (inputStr.current === correctStr) {
                toggleTheme()
                inputStr.current = ''
            } else if (!correctStr.startsWith(inputStr.current))
                inputStr.current = ''
        }

        document.addEventListener('keydown', handleKeyboard)

        return () => {
            document.removeEventListener('keydown', handleKeyboard)
        }
    }, [theme, toggleTheme])

    return (
        <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
            <>
                <GlobalStyles />
                <Navbar theme={theme} onThemeChange={toggleTheme} />
                <Router>
                    <Home />
                </Router>
                <Footer />
            </>
        </ThemeProvider>
    )
}

export default App

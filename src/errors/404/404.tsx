import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Error from '../error'

function NotFound() {
    useEffect(() => {
        document.title = 'Devin Mui | Are You Lost?'
    })
    return (
        <Error>
            Nothing here but lost souls. <Link to="/">Return home.</Link>
        </Error>
    )
}

export default NotFound

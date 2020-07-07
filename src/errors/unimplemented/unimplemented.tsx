import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Error from '../error'

function Unimplemented() {
    useEffect(() => {
        document.title = 'Devin Mui | Where is the Content?'
    })
    return (
        <Error>
            Looks like this isn't finished yet. <Link to="/">Return home.</Link>
        </Error>
    )
}

export default Unimplemented

import React from 'react'

function Error(props: any) {
    return (
        <div style={{ width: '100%', height: '100%', marginTop: '-175px' }}>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {props.children}
            </div>
        </div>
    )
}

export default Error

import React from 'react'

const TheButton = ({ children, ...props }) => {
    return (
        <button className="btn btnSubmit" { ...props }>
            { children }
        </button>
    )
}

export default TheButton
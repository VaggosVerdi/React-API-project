import React from 'react'

// Reusable button component
const TheButton = ({ children, ...props }) => {
    return (
        <button className="btn btnSubmit mt-3" { ...props }>
            { children }
        </button>
    )
}

export default TheButton
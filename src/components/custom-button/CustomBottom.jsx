import React from 'react'
import "./CustomButton.scss"

function CustomBottom({ disabled, invert, children, ...otherProps }) {
    return (
        <button disabled={disabled} className={`${invert ? 'inverted' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomBottom

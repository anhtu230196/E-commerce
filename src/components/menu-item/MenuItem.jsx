import React from 'react'
import { withRouter } from 'react-router-dom'
import "./MenuItem.scss"

function MenuItem({ title, imageUrl, size, history }) {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`/shop/${title}`)} >
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>

            </div>
        </div>
    )
}

export default withRouter(MenuItem)

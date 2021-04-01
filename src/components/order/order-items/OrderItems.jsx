import React from 'react'
import "./OrderItems.scss"

function OrderItems({ item }) {
    const { name, quantity, imageUrl, price } = item
    return (
        <div className="order-item">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="value">{quantity}</span>
            </span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    )
}

export default OrderItems

import React from 'react'
import "./CartItem.scss"

function CartItem({ cartItem: { imageUrl, price, quantity, name } }) {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x $ {price} </span>
            </div>
        </div>
    )
}

export default CartItem

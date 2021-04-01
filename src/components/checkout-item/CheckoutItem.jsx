import React from 'react'
import { connect } from 'react-redux'
import { addItem, clearItemFromCart, removeItem } from '../../redux/actions/cartAction'
import "./CheckoutItem.scss"

function CheckoutItem({ cartItem, dispatch }) {
    const { name, quantity, imageUrl, price } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => dispatch(addItem(cartItem))} >&#10095;</div>
            </span>
            <span className="price">{quantity} x ${price}</span>
            <span className="remove-button" onClick={() => dispatch(clearItemFromCart(cartItem))} >&#10005;</span>
        </div>
    )
}

export default connect()(CheckoutItem)

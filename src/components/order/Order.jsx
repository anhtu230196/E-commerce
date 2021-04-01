import React from 'react'
import "./Order.scss"
import moment from 'moment'
import OrderItems from './order-items/OrderItems'

function Order({ order }) {
    return (
        <div className="order">
            <div className="order__info">
                <p>Order ID: <strong>{order.id}</strong></p>
                <p>Created At: <small>{moment(order.createdAt).format("DD/MM/YYYY hh:mm a")}</small></p>
            </div>
            <div className="order-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>

            </div>
            {
                order.cartItems.map(cartItem => <OrderItems key={cartItem.id} item={cartItem} />)
            }
            <div className="total">
                <span>TOTAL: ${order.total}</span>
            </div>
        </div>
    )
}

export default Order

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import CustomButton from "../../components/custom-button/CustomBottom"
import { selectCartItems, selectCartTotal } from '../../redux/selectors/cartSelector'
import "./CheckoutPage.scss"
import { selectCurrentUser } from '../../redux/selectors/userSelector'
import { purchase } from '../../redux/actions/orderAction'
import { purchaseLoading } from '../../redux/selectors/orderSelector'
import LoadingPage from "../loading-page/LoadingPage"

function CheckoutPage({ cartItems, total, userId, dispatch, orderLoading }) {
    const history = useHistory()

    const handlePurchase = (cartItems, total) => {
        let newOrder = {
            cartItems,
            total,
            createdAt: new Date(),
            userId: userId ? userId : null
        }
        dispatch(purchase(newOrder, history))
    }
    return (
        cartItems.length ?
            (orderLoading ? (<LoadingPage />) : (
                <div className="checkout-page">
                    <div className="checkout-header">
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
                        <div className="header-block">
                            <span>Remove</span>
                        </div>
                    </div>
                    {
                        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                    }
                    <div className="total">
                        <span>TOTAL: ${total}</span>
                        <CustomButton onClick={() => handlePurchase(cartItems, total, userId)}>BUY NOW</CustomButton>
                    </div>
                </div>
            ))
            :
            (<div className="checkout-page">
                <span>Your cart is empty</span >
            </div >)
    )
}

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state),
        total: selectCartTotal(state),
        userId: selectCurrentUser(state),
        orderLoading: purchaseLoading(state)
    }
}

export default connect(mapStateToProps)(CheckoutPage)

import React from 'react'
import "./CartDropdown.scss"
import CustomBottom from "../custom-button/CustomBottom"
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/selectors/cartSelector'
import CartItem from '../cart-item/CartItem'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/actions/cartAction'

function CartDropdown({ cartItems, history, dispatch }) {
    return (

        <div className="cart-dropdown">
            { cartItems.length ? <>
                <div className="cart-items">
                    {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
                </div>
                <CustomBottom onClick={() => { history.push("/checkout"); dispatch(toggleCartHidden()) }}>GO TO CHECKOUT</CustomBottom> </> : <span className="empty-message">Your cart is empty</span>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    }
}
export default connect(mapStateToProps)(withRouter(CartDropdown))

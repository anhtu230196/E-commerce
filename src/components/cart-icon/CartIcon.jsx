import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/actions/cartAction'
import { selectCartItemsCount } from '../../redux/selectors/cartSelector'
import "./CartIcon.scss"


function CartIcon({ dispatch, count }) {
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{count}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps)(CartIcon)

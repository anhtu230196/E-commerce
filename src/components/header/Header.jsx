import React from 'react'
import "./Header.scss"
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/CartIcon'
import { connect } from 'react-redux'
import { selectCartHidden } from '../../redux/selectors/cartSelector'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCurrentUser } from '../../redux/selectors/userSelector'
import { logout } from '../../redux/actions/userAction'

function Header({ hidden, userEmail, dispatch }) {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/order" className="option">ORDER</Link>
                {userEmail ? <p className="option" onClick={() => dispatch(logout())}>SIGN OUT</p> : <Link to="/authenticate" className="option">SIGN IN</Link>}
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        hidden: selectCartHidden(state),
        userEmail: selectCurrentUser(state)
    }
}

export default connect(mapStateToProps)(Header)

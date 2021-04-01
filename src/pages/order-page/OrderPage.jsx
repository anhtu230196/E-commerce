import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../components/order/Order';
import { fetchOrder } from '../../redux/actions/orderAction';
import { fetchOrdersByUserId, fetchOrdersNonUserId, orderLoading } from '../../redux/selectors/orderSelector';
import { selectCurrentUser } from '../../redux/selectors/userSelector';
import LoadingPage from '../loading-page/LoadingPage';
import "./style.scss"

class OrderPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchOrder())
    }
    render() {
        const { loading, orderByUserId, orderNonUserId, userId } = this.props
        // console.log(orderByUserId);
        // console.log(orderNonUserId);
        return (
            loading ? <LoadingPage /> : (
                <div className="orders">
                    <h1>ORDER PAGE</h1>
                    <div className="orders__order">
                        {userId ?
                            orderByUserId.length ? orderByUserId.reverse().map(order => <Order key={order.id} order={order} />) : <p style={{ textAlign: "center" }}>You have no orders yet!!!</p>
                            :
                            orderNonUserId.length ? orderNonUserId.reverse().map(order => <Order key={order.id} order={order} />) : <p style={{ textAlign: "center" }}>You have no orders yet!!!</p>
                        }
                    </div>
                </div>
            )
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: orderLoading(state),
        orderByUserId: fetchOrdersByUserId(state),
        orderNonUserId: fetchOrdersNonUserId(state),
        userId: selectCurrentUser(state)
    }
}

export default connect(mapStateToProps)(OrderPage);

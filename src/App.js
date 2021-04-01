import { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import CheckoutPage from "./pages/checkout-page/CheckoutPage";
import HomePage from "./pages/home-page/HomePage";
import OrderPage from "./pages/order-page/OrderPage";
import ShopPage from "./pages/shop-page/ShopPage";
import SignInSignUpPage from "./pages/signin-signup/SignInSignUpPage";
import { authSuccess } from "./redux/actions/userAction";
import { selectCurrentUser } from "./redux/selectors/userSelector";

class App extends Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("authentication"));
    console.log(user);
    if (user) {
      this.props.dispatch(authSuccess(user));
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/order" component={OrderPage} />
          <Route
            path="/authenticate"
            render={() =>
              this.props.userEmail ? <Redirect to="/" /> : <SignInSignUpPage />
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userEmail: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps)(App);

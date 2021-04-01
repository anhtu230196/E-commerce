import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from "../custom-button/CustomBottom"
import { connect } from 'react-redux';
import "./SignIn.scss"
import { setCurrentUser } from '../../redux/actions/userAction';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state;
        this.props.dispatch(setCurrentUser(email, password, null))
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" label="Email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <FormInput type="password" label="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton>SIGN IN</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(SignIn);

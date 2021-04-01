import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'
import "./style.scss"

function SignInSignUpPage() {
    return (
        <div className="sign-in-and-sign-up">
            <div className="signin">
                <SignIn />
            </div>
            <SignUp />
        </div>
    )
}

export default SignInSignUpPage

import React from 'react'
import SignInComp from '../../components/signIn/signIn'
import './signInandsignup.scss'
import SignUp from '../../components/sign-up/sign-up-component'

const SignIn = () => (
    <div className="sign-in-up">
       <SignInComp/>
       <SignUp/>
    </div>
)

export default SignIn
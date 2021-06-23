import React from 'react'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'
import './signIn.scss'

class SignInComp extends React.Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const {name,value} = e.target

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <div className="fixed-text">
                    <h2>already have account</h2>
                    <span>sign in with your email</span>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type='email' label="email" handleChange={this.handleChange} value={this.state.email} required/>
                    <FormInput type='password' label="password" name="password" handleChange={this.handleChange} value={this.state.password}  />
                    <CustomButton type="submit">
                        SIGN IN
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignInComp
import React from 'react'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'
import './signIn.scss'
import {signInWithGoogle} from '../../firebase/firebase.utils'

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
                    <div style={{position:'relative' ,display:'flex',justifyContent:'space-around'}}>
                    <CustomButton type="submit" style={{flex:'1', marginRight:'10px'}}>
                        Sign In
                    </CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle} style={{flex:'2',borderColor:'#ffff'}}>
                        Sign In With Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInComp
import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/ShopPage/shop-component';
import Header from './components/Header/Header';
import SignInUp from './pages/SignIn/SignInandsignup';
import {auth} from './firebase/firebase.utils'

const HatPage = () => {
  return (
    <div>
      <h1>hats</h1>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      current_user: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({current_user: user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header currentUser = {this.state.current_user} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInUp}/>
      </Switch>
      </div>
  );
  }      
}

export default App;

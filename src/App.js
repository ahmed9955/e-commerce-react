import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Route,Switch,Redirect} from 'react-router-dom'
import ShopPage from './pages/ShopPage/shop-component';
import Header from './components/Header/Header';
import SignInUp from './pages/SignIn/SignInandsignup';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user-action'


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      
      const userRef = await createUserProfileDocument(userAuth)
    
        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            }) 
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route exact path='/signin'  render = {() => 
            this.props.currentUser? (<Redirect to='/'/>): <SignInUp/>
          }/>
      </Switch>   
      </div>
  );
  }      

}
const mapStateToProps = ({ user }) => ({
    currentUser: user.current_user
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

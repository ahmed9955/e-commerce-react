import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/ShopPage/shop-component';

const HatPage = () => {
  return (
    <div>
      <h1>hats</h1>
    </div>
  )
}

function App () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
      </Switch>
      </div>
  );    
}

export default App;

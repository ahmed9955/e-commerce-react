import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      monsters: []
    }
  }


  async componentDidMount(){
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await users.json()
    this.setState({monsters: response}) 
  }

  render(){
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
      </div>
  );  
}
  
}

export default App;

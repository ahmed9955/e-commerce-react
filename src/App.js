import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      monsters: [],
      search:''
    }
  }


  async componentDidMount(){
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await users.json()
    this.setState({monsters: response}) 
  }

  search = (e) => {
    this.setState({search: e.target.value})
  }

  render(){
    const {monsters, search} = this.state
    return (
      <div className="App">
        <h1>MONSTERS Rolodex</h1>
        <input className="search-bar" type="search" placeholder="type your monster" onChange={this.search}/>
        <CardList monsters={monsters} search={search}/>
      </div>
  );  
}
  
}

export default App;

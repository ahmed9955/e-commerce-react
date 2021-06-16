import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box';

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

  searchfilter = (e) => {
    this.setState({search: e.target.value})
  }

  render(){
    const {monsters, search} = this.state
    return (
      <div className="App">
        <h1>MONSTERS Rolodex</h1>
        <SearchBox search={this.searchfilter} />
        <CardList monsters={monsters} search={search}/>
      </div>
  );  
}
  
}

export default App;

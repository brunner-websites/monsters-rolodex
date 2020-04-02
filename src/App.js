import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }


  onChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <SearchBox placeholder="Search Monsters..." onChange={this.onChange} />
        {/* <input
          type="search"
          placeholder="Search Monsters..."
          onChange={(e) => this.onChange(e)} /> */}
        <CardList monsters={filteredMonsters.length > 0 ? filteredMonsters : monsters} />
      </div>
    );
  }
}

export default App;

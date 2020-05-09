import React, { Component } from 'react';
import './App.css';

import {CardList} from "./components/card-list/card-list.component"
import {SearchBox} from "./components/search-box/search-box.component";
class App extends Component{

    constructor(){
      super();
      this.state={
        monsters :[],
        searchFiled :""
      }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users').
      then(response =>response.json()).
      then(users => this.setState({monsters  :users}));
    }

     render(){
       const {monsters, searchFiled} = this.state
        const filteredMonsters = monsters.filter(
          data=>data.name.toLowerCase().includes(searchFiled.toLowerCase())
        );
        return (
          <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox  placeholder="Search Box "  handleChange = {e=>this.setState({searchFiled : e.target.value})}/>
            <CardList monsters = {filteredMonsters}> </CardList>
            
          </div>
        );
      }
}

export default App;

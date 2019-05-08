import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';


class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    //axios.get returns a promise that we can 
    // chain .then() and .catch() and .finally()
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({friends: response.data}))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
      <FriendList />
      </div>
    );
  }
}


export default App;

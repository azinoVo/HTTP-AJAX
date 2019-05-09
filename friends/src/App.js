import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import Home from './components/Home';
import {Route} from 'react-router-dom';
import styled from 'styled-components'

const AppContainer = styled.div`
  max-width:500px;
  height:auto;
`

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
    console.log(this.state.friends);

    return (
      <AppContainer>
        <Route exact path='/' render={props => (<Home {...props} friends={this.state.friends} />)}/> 
      {/* <FriendList friends={this.state.friends} /> */}
      {/* <Route path='/movies/:id' render={props => (<Movie {...props} addToSavedList={this.addToSavedList} />)} /> */}
        <Route path='/friends' render={props => (<FriendList {...props} friends={this.state.friends} />)}/>
      </AppContainer>
    );
  }
}




export default App;

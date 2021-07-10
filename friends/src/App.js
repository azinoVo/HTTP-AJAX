import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import Home from './components/Home';
import {Route} from 'react-router-dom';
import styled from 'styled-components'
import NewFriendForm from './components/NewFriendForm';
import Friend from './components/Friend';

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

  // passing this to the newFriendForm, friend is the state on the form
  addFriend = friend => {
    axios.post(`http://localhost:5000/friends`, friend)
      .then(response => 
        this.setState({friends: response.data}),
          )
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.friends);

    return (
      <AppContainer>
              {/* <Route path='/movies/:id' render={props => (<Movie {...props} addToSavedList={this.addToSavedList} />)} /> */}

        <Route path='/' render={props => (<Home {...props} friends={this.state.friends} />)}/> 
        <Route exact path='/friends' render={props => (<FriendList {...props} friends={this.state.friends} />)}/>
        <Route path='/friends/:id' render={props => (<Friend {...props} friends={this.state.friends} />)}/>
        <Route path='/addFriend' render={props => (<NewFriendForm {...props} addFriend={this.addFriend} />)} />
      </AppContainer>
    );
  }
}




export default App;

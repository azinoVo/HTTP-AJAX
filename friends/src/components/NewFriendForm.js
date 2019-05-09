import React, { Component } from 'react';

class NewFriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age:'',
            email:''
        }
    }

    changeHandler = event => {
        // some function
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    newFriend = event => {
        event.preventDefault();
        this.props.addFriend(this.state);
        this.props.history.push('/friendList')
    }

    render() {
        return (
            <div>
            <h2>Made a New Friend?</h2>
        <form onSubmit={this.newFriend}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="...Name is required"
            value={this.state.name}
          />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="...Age is required"
            value={this.state.age}
          />

          <input
            type="string"
            name="email"
            onChange={this.changeHandler}
            placeholder="...Email is required"
            value={this.state.email}
          />
        
          <button onClick={this.newFriend}>Add Friend</button>
        </form>
            </div>
        );
    }
}

export default NewFriendForm;
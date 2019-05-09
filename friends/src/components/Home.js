import React, { Component } from 'react';
import styled from 'styled-components'

const FriendsAll = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:0 3%;
`

class Home extends Component {
    constructor() {
        super();
        this.state = {
            // some state here
        }
    }


    render() {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: "center" }}>My Friends</h1>
                <FriendsAll>
                    {this.props.friends.map(friend =>
                        <p>{friend.name}</p>)}
                </FriendsAll>
            </React.Fragment>
        );
    }
}

export default Home;
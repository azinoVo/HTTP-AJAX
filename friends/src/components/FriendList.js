import React, { Component } from 'react';
import FriendInfo from './FriendInfo';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Friends = styled.div`
    width:100%;
    display:flex; 
`

class FriendList extends Component {
    constructor(props){
        super(props);

        console.log(props);
    }


    render() {
        return (
            <Friends>
                <h1>Top Friends</h1>
                {this.props.friends.map(friend =>
                <FriendInfo key={friend.id} friend={friend} />)}
            </Friends>
        );
    }
}

export default FriendList;


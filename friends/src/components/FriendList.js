import React, { Component } from 'react';
import FriendInfo from './FriendInfo';
import PropTypes from 'prop-types';


class FriendList extends Component {
    constructor(props){
        super(props);

        console.log(props);
    }


    render() {
        return (
            <React.Fragment>
                {this.props.friends.map(friend =>
                <FriendInfo id={friend.id} friend={friend} />)}
            </React.Fragment>
        );
    }
}

FriendList.propTypes = {
    friends: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
    })
}


export default FriendList;


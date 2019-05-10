import React from 'react';

function Friend(props) {
    const friendID = props.match.params.id;
    const friend = props.friends.find(friend => `${friend.id}` === friendID)
    console.log(friend);

    return (
        <div>
            <h1>TESTING</h1>
        </div>
    );
}

export default Friend;
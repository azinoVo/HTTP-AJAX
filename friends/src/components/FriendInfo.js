import React from 'react';
import styled from 'styled-components'

const FriendContainer = styled.div`
    width:100%;
    height: auto;
    background-color:lightblue; 
    margin:1%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

function FriendInfo(props) {
    return (
        <FriendContainer>
            <h3>{props.friend.name}</h3>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </FriendContainer>
    );
}


export default FriendInfo;
import React from 'react'

const User = (props) => {
    return (
        <div>
            <img src={props.users.profilePic} />
            <h4>{props.users.username}</h4>
            <p>{props.users.email}</p>
            <p>{props.users.phoneNumber}</p>
            <p>{props.users.address}</p>
            <p>{props.users.aboutMe}</p>
            <p>{props.users.interests}</p>
            <p>{props.users.distance}</p>
        </div>
    )
}

export default User
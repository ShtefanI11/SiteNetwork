import React from 'react'
import css from './../Nav/Nav.module.css'
import FriendState from './FriendState/FriendState'
const FriendList = (props) => {
    let friendelement = props.state.friendlist.map(fr => <FriendState name={fr.name} />)
    return (
        <div>
            <div>
                { friendelement }
            </div>
        </div>
    )
}

export default FriendList
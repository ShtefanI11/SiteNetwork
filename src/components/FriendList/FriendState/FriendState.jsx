import React from "react"
import css from './../FriendList.module.css'
const FriendState = (props) => {
    console.log(props)
    return (
        <div className={css.avatarka}>
            <img className={css.avatarka} src="https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg" />

            {props.name}

        </div>
    )
}

export default FriendState
import React from 'react';
import css from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={css.dialog}>
            <div>{props.message}</div>
        </div>
    )
}
export default Message;
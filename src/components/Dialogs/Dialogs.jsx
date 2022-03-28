import React from 'react'
import css from './Dialogs.module.css'
import Message from './Message/Message'
import DialogsItems from './DialogsItem/DialogsItem'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { Textarea } from '../common/FormsControls/FormsControls'
const Dialogs = (props) => {
    const state = props.messagesPage;
    let dialogElements = state.dialogs.map( d => <DialogsItems name={d.name} id={d.id} /> )
    let messageElements = state.messages.map( m => <Message message={m.message} id={m.id}/>)
    let newMessageText = state.newMessageText;

    let AddNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }
    if (!props.isAuth) return <Redirect to='/login' />  
    return (
        <div className={css.dialogs}>
            <div className={css.dialogitem}>
                { dialogElements }
            </div>
            <div className={css.messageitem}>
                <div>{messageElements}</div>
                <AddMessageReduxForm onSubmit={AddNewMessage}/>
            </div>
        </div>
    )
}
const maxLength10 = maxLengthCreator(10)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name='newMessageText' placeholder='Enter your message'
                        validate={[required, maxLength10]} component={Textarea} />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm)
export default Dialogs;
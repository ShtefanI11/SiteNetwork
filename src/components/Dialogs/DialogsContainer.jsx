import { connect } from 'react-redux';
import { sendMessageCreator } from '../../Redux/messageReducer'
import Dialogs from './Dialogs';
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { compose } from 'redux';
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageCreator(newMessageText))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
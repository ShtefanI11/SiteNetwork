import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator} from '../../../Redux/profileReducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        post: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newMessageText) => {
            dispatch(addPostActionCreator(newMessageText));
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
    
export default MyPostContainer;
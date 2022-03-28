import { usersAPI, profileAPI } from "../api/api";
const ADD_POST = 'addPost';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'
let initialState = {
    post: [
        { id: 1, message: 'Hi, how are you?', like: 15 },
        { id: 2, message: 'Where are you from?', like: 33 }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newMessageText,
                like: 0
            };
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ''
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        case DELETE_POST:
            return {
                ...state, post: state.post.filter(p => p.id != action.postId)
            }
        default:
            return state
    }
}
export const addPostActionCreator = (newMessageText) => ({ type: ADD_POST, newMessageText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export default profileReducer;
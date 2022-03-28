import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      post: [
        { id: 1, message: 'Hi, how are you?', like: 15 },
        { id: 2, message: 'Where are you from?', like: 33 }
      ],
      newPostText: 'INNER.SSH.COM'
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: 'Petya' },
        { id: 2, name: 'Masha' },
        { id: 3, name: "Ramil'" },
        { id: 4, name: 'Lawrence' },
        { id: 5, name: 'Misha' }
      ],
      messages: [
        { id: 1, message: 'Otprivil(-a) istoriyu*' },
        { id: 2, message: 'Otprivil(-a) istoriyu*' },
        { id: 3, message: "Otprivil(-a) istoriyu*" },
        { id: 4, message: 'Otprivil(-a) istoriyu*' },
        { id: 5, message: 'Otprivil(-a) istoriyu*' }
      ],
      newMessageText: 'INNER.SSH.COM'
    },
    sidebar: {

    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state info changers')
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};
export default store;
window.store = store;
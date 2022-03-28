const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })
export default messageReducer;
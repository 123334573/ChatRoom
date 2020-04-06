import { combineReducers } from 'redux';
import { send_message, sendMessage } from './action';

function messages(state = [], action) {
    switch (action.type) {
        case send_message:
            return [...state, { text: action.text }];
        default: return state;
    }
}

const chatApp = combineReducers({ messages });
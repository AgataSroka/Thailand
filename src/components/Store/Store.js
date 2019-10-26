import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const initState = {
    ogólne: [
        {from: 'Agata', message: 'Witaj!'},
    ],
    przygotowanie_do_wyjazdu: [
        {from: 'Agata', message: 'Witaj!'},

    ],

    transport: [
        {from: 'Agata', message: 'Witaj!'},

    ],
    ciekawe_miejsca:

        [
            {from: 'Agata', message: 'Witaj'},

        ],
    jak_szukać_noclegu:

        [
            {from: 'Agata', message: 'Witaj'},

        ],
    Święta_na_wyspie:

        [
            {from: 'Agata', message: 'Witaj'},

        ]
};

function reducer(state, action) {
    const {from, message, topic} = action.payload;
    if (action.type === 'ZOSTAW_WIADOMOŚĆ') {
        return {
            ...state,
            [topic]: [
                ...state[topic],

                {from, message}
            ]
        };
    } else {
        return state
    }
}


let socket;

function sendChatAction(value) {
    socket.emit('chat message', value);
}


export default function Store(props) {

    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if (!socket) {
        socket = io.connect(':3000');
        socket.on('chat message', function (message) {
            dispatch({type: 'ZOSTAW_WIADOMOŚĆ', payload: message});
            console.log({message})
        });
    }

    const user = '' + Math.random(100).toFixed(2);

    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}
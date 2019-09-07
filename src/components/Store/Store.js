import React from 'react';
import io from 'socket.io-client';

 export const CTX = React.createContext();

const initState = {
    ogólne: [
        {from: 'Agata', message: 'Witaj!'},
    ],
    przygotowanie_do_wyjazdu: [
        {from: '', message: ''},

    ],

transport: [
    {from: '', message: ''},

],
    ciekawe_miejsca:

[
    {from: '', message: ''},

]
};

function reducer (state, action){
    const {from, message, topic} = action.payload;
    switch(action.type) {
        case 'ZOSTAW_WIADOMOŚĆ':
            return{
                ...state,
                [topic]: [
                    ...state[topic],

        {from, message}
        ]
            };
        default:
            return state
    }
}


let socket;

function sendChatAction(value){
    socket.emit('chat message',value);
}


export default function Store(props){

    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if(!socket ) {
        socket =io(':3000');
        socket.on('chat message', function(message){
            dispatch({type: 'ZOSTAW_WIADOMOSC', payload: message});
            console.log({message})
        });
    }

    const user = 'Agata' + Math.random(100).toFixed(2);

    return(
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}
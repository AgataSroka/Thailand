import React, {Component} from "react";
import '../../Styles/Contact.scss';

const instanceLocator = 'v1:us1:90a5379e-8a9a-44e5-966b-396e149a1d9c'
const testToken = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/90a5379e-8a9a-44e5-966b-396e149a1d9c/token'
const roomId = 'thailand'
const username = 'Agata'



class Contact extends Component {
    constructor(){
        super()
        this.state = {
            messages: []
        }
this.sendMessage = this.sendMessage.bind(this)
}

componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: 'apka',
            tokenProvider: new Chatkit.tokenProvider({
                url:testToken
            })
        });
    chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
                roomId: roomId,
                hooks: {
                    oneNewMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message]
                        })
                    }
                }

            })
        })
}

sendMessage(text){
        this.currentUser.sendMessage({
            text,
            roomId: roomId
        })
    }


    render() {
        return (
            <div>
                <Title/>
                <MessageText
                    roomId = {this.state.roomId}
                    message={this.state.messages}/>
                <MessageSend
                sendMessage ={this.sendMessage}/>
            </div>
        )

    }
}

class MessageText extends Component{
    render(){
        return (
            <ul>
                {this.props.message.map (message=>{
                    return(
                        <li key={message.id}>
                            <div>
                                {message.userId}
                            </div>
                            <div>
                                {message.text}
                            </div>
                        </li>
                    )
                })}

            </ul>
        )
    }
}

class MessageSend extends Component{
    constructor(){
        super()
        this.state= {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.hanldeSubmit.bind(this)
    }
    handleChange(e){
            this.setState({
                message: e.target.value
            })
        }
     handleSubmit(e){
        e.preventDefault()
         this.props.sendMessage(this.state.message)
         this.setState({
             message: ''
         })
     }
      render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                onChange={this.handleChange}
                value={this.state.message}
                placeholder='wpisz wiadomosc i kliknij wyslij' type='text'/>
            </form>
        )
      }

}

function Title(){
    return <p> Witaj! W czym mogę pomóc? :) </p>
}



export default Contact;

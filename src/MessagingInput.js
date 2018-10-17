import React, { Component } from 'react'

class MessagingInput extends Component {

  send = (message) => this.props.connection.send(JSON.stringify(message))

  handleMessaging = (e) => {
    e.preventDefault()
    this.send({username: e.target.username.value, message: e.target.message.value})
    e.target.message.value = ""
  }

  render() {
    return (
      <div id="MessageInput">
        <form onSubmit={this.handleMessaging}><br/>
          <input type="text" id="username"/><br/>
          <textarea id="message"></textarea><br/>
          <input type="Submit"/><br/>
        </form>
      </div>
    )
  }
}

export default MessagingInput

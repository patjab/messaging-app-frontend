import React, { Component } from 'react'
import { connect } from 'react-redux'

class MessagingInput extends Component {

  send = (message) => this.props.connection.send(JSON.stringify(message))

  handleMessaging = (e) => {
    if ( e.type === 'Submit' ) {
      e.preventDefault()
      this.send({username: e.target.username.value, message: e.target.message.value})
      e.target.message.value = ""
    } else if (e.type === 'keydown' && e.key === 'Enter') {
      e.preventDefault()
      this.send({username: e.currentTarget.username.value, message: e.currentTarget.message.value})
      e.currentTarget.message.value = ""
    }
  }

  render() {
    return (
      <div id="MessageInput">
        <form onSubmit={this.handleMessaging} onKeyDown={this.handleMessaging}><br/>
          <input type="text" id="username"/><br/>
          <textarea id="message"></textarea><br/>
          <input type="Submit"/><br/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    connection: state.connection
  }
}

export default connect(mapStateToProps)(MessagingInput)

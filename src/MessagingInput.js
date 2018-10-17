import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { setUsername, addMessage, setConnection, setColor, setActiveUsers } from './actions'

class MessagingInput extends Component {

  send = (message) => this.props.connection.send(JSON.stringify(message))

  handleMessaging = (e) => {
    if ( e.type === 'submit' || (e.type === 'keydown' && e.key === 'Enter') ) {
      e.preventDefault()

      const username = e.target.username || e.currentTarget.username
      const message = e.target.message || e.currentTarget.message

      if (!this.props.username ) {
        this.props.setUsername(username.value)
        this.setUpConnection(username.value)
      } else {
        this.send({username: this.props.username, message: message.value, color: this.props.color})
        message.value = ""
      }
    }
  }

  setUpConnection = (username) => {
    const connection = new WebSocket('ws://localhost:9090', username)
    connection.onmessage = (message) => {
      const data = JSON.parse(message.data)
      if (!this.props.color) {
        this.props.setColor(data.color)
      } else {
        if ( data.users ) {
          this.props.setActiveUsers(data.users)
        }
        this.props.addMessage(data)
      }
    }
    this.props.setConnection(connection)
  }

  displayFormComponents = () => {
    if (this.props.username) {
      return (
        <Fragment>
          <span id="usernameBold">{this.props.username}</span><br/>
          <textarea id="message"></textarea><br/>
          <input type="Submit" value="Send"/>
        </Fragment>
      )
    } else {
      return (
        <input type="text" id="username" placeholder="Please enter a username"/>
      )
    }
  }

  render() {
    return (
      <div id="MessageInput">
        <form onSubmit={this.handleMessaging} onKeyDown={this.handleMessaging}>
          { this.displayFormComponents() }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    connection: state.connection,
    username: state.username,
    color: state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setConnection: (connection) => dispatch(setConnection(connection)),
    setUsername: (username) => dispatch(setUsername(username)),
    addMessage: (message) => dispatch(addMessage(message)),
    setColor: (color) => dispatch(setColor(color)),
    setActiveUsers: (users) => dispatch(setActiveUsers(users))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagingInput)

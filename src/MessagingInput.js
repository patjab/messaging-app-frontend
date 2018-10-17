import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { setUsername } from './actions'

class MessagingInput extends Component {

  send = (message) => this.props.connection.send(JSON.stringify(message))

  handleMessaging = (e) => {
    if ( e.type === 'submit' || (e.type === 'keydown' && e.key === 'Enter') ) {
      e.preventDefault()

      const username = e.target.username || e.currentTarget.username
      const message = e.target.message || e.currentTarget.message

      if (!this.props.username ) {
        this.props.setUsername(username.value)
      } else {
        this.send({username: this.props.username, message: message.value})
        message.value = ""
      }
    }
  }

  displayFormComponents = () => {
    if (this.props.username) {
      return (
        <Fragment>
          <span id="usernameBold">{this.props.username}</span><br/>
          <textarea id="message"></textarea><br/>
          <input type="Submit" value="Send"/><br/>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <input type="text" id="username" placeholder="Please enter a username"/><br/>
        </Fragment>
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
    username: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => dispatch(setUsername(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagingInput)

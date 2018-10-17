import React, { Component } from 'react'
import { connect } from 'react-redux'

class Conversation extends Component {
  displayMessages = () => this.props.messages.map(message => {
    return ( message.username === 'admin' ?
      <p className="adminMessage line">
        <span className="message">{message.message}</span>
      </p>
      :
      <div className="line">
        <span className="username" style={{color: message.color}}>{message.username}: </span>
        <span className="message">{message.message}</span>
      </div>
    )
  })

  componentDidUpdate() {
    this.refs.conversation.scrollTop = this.refs.conversation.scrollHeight
  }

  render() {
    return (
      <div id="conversation" ref="conversation">
      {this.displayMessages()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Conversation)

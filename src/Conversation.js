import React, { Component } from 'react'
import { connect } from 'react-redux'

class Conversation extends Component {
  displayMessages = () => this.props.messages.map(message => <div className="line"><span className="username">{message.username}: </span><span className="message">{message.message}</span></div>)

  render() {
    return (
      <div id="conversation">
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

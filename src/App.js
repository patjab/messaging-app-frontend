import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import MessagingInput from './MessagingInput'
import Conversation from './Conversation'

import { setConnection, addMessage } from './actions'

class App extends Component {
  state = {
    messages: []
  }

  componentDidMount() {
    const connection = new WebSocket('ws://localhost:9090')

    connection.onmessage = (message) => {
      const data = JSON.parse(message.data)
      this.props.addMessage(data)
    }

    this.props.setConnection(connection)
  }

  render() {
    return (
      <div className="App">
        <div id="AppContainer">
          <Conversation />
          <MessagingInput />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setConnection: (connection) => dispatch(setConnection(connection)),
    addMessage: (message) => dispatch(addMessage(message))
  }
}

export default connect(null, mapDispatchToProps)(App);

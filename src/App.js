import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import MessagingInput from './MessagingInput'
import Conversation from './Conversation'
import ActiveUsers from './ActiveUsers'

import { setConnection, addMessage } from './actions'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div id="ActiveUsersContainer">
          <ActiveUsers />
        </div>
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

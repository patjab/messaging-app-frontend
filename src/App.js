import React, { Component } from 'react';
import './App.css';

import MessagingInput from './MessagingInput'
import Conversation from './Conversation'

class App extends Component {
  state = {
    connection: null,
    messages: []
  }

  componentDidMount() {
    const connection = new WebSocket('ws://localhost:9090')

    connection.onmessage = (message) => {
      const data = JSON.parse(message.data)
      this.setState({messages: [...this.state.messages, data]})
    }

    this.setState({connection})
  }

  render() {
    return (
      <div className="App">
        <div id="AppContainer">
          <Conversation messages={this.state.messages}/>
          <MessagingInput connection={this.state.connection} />
        </div>
      </div>
    )
  }
}

export default App;

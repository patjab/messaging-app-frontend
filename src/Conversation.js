import React from 'react'

const Conversation = (props) => {
  const displayMessages = () => props.messages.map(message => <div className="line"><span className="username">{message.username}: </span><span className="message">{message.message}</span></div>)

  return (
    <div id="conversation">
      {displayMessages()}
    </div>
  )
}

export default Conversation

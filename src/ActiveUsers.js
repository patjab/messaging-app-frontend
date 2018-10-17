import React, { Component } from 'react'
import { connect } from 'react-redux'

class ActiveUsers extends Component {

  displayActiveUsers = () => this.props.activeUsers.map(user => <li>{user}</li>)

  render() {
    return (
      <div id="ActiveUsers">
        <p className="subtitle">Active Users</p>
        <ul>
        { this.displayActiveUsers() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeUsers: state.activeUsers
  }
}

export default connect(mapStateToProps)(ActiveUsers)

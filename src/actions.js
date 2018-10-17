export const setConnection = (connection) => {
  return {
    type: "SET_CONNECTION",
    payload: connection
  }
}

export const addMessage = (message) => {
  return {
    type: "ADD_MESSAGE",
    payload: message
  }
}

export const setUsername = (username) => {
  return {
    type: "SET_USERNAME",
    payload: username
  }
}

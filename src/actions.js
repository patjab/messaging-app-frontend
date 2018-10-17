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

const initialState = {
  connection: null,
  username: null,
  messages: []
}

const messageController = (state = initialState, action) => {
  switch(action.type) {
    case "SET_CONNECTION":
      return {
        ...state,
        connection: action.payload
      }
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload
      }
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    default:
      return state
  }
}

export default messageController

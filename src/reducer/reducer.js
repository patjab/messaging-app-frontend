const initialState = {
  connection: null,
  username: null,
  messages: [],
  color: null,
  activeUsers: []
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
    case "SET_COLOR":
      return {
        ...state,
        color: action.payload
      }
    case "SET_ACTIVE_USERS":
      return {
        ...state,
        activeUsers: action.payload
      }
    default:
      return state
  }
}

export default messageController

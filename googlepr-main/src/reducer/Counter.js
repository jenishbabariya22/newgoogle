import { json } from "react-router-dom"

let inilitize = {
  user: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
}
const reducer = (state = inilitize, action) => {
  switch (action.type) {
    case "adduser":
      return {
        ...state
      }

    case "removeuser":
      let id = action.payload
      let removerec = state.user.filter((val) => {
        return val.id !== id
      })
      localStorage.setItem("users", JSON.stringify(removerec))
      console.log(removerec);
      return {
        ...state,
        user: removerec
      }
    default:
      return state
  }
}

export default reducer
import { createContext, useContext, useReducer } from 'react'
import DispatchActions from './constants'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export const useGithubUsers = () => {
  const context = useContext(GithubContext)
  if (!context) {
    throw new Error('useGithubUsers must be used within a GithubProvider')
  }
  return context.users
}

export const useGithubDispatch = () => {
  return useContext(GithubContext)
}

const githubReducer = (state, action) => {
  switch (action.type) {
    case DispatchActions.GET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case DispatchActions.CLEAR_USERS:
      return {
        ...state,
        users: [],
      }
    default:
      return state
  }
}

export default GithubContext

import React, { createContext, useReducer, useContext } from 'react'
import products from '../assets/data'

const AppContext = createContext()

// action: { type, payload, error, meta }
function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: state.concat(action.payload)
      }
    default:
      return state
  }
}
const initialState = {
  cart: [],
  products,
  total: 0,
  error: null,
  isloading: false
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const store = { state, dispatch }

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a Provider')
  }
  return context
}

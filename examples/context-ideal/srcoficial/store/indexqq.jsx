import React, { createContext, useContext, useReducer } from 'react'

const AppContext = createContext()

const initialState = {
  cart: [],
  products: [],
  total: 0,
  isLoading: false,
  error: null
}

// FSA: FLUX Standard Action
// action: { type, payload, error, meta }
function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'ADD_TO_CART':
      // eslint-disable-next-line no-case-declarations
      const newProduct = action.payload
      // eslint-disable-next-line no-case-declarations
      const newCart = [...state.cart, newProduct]
      // eslint-disable-next-line no-case-declarations
      const total = newCart.reduce((acc, curr) => acc + curr.price, 0)

      return {
        ...state,
        cart: newCart,
        total
      }
    default:
      return state
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const store = {
    state,
    dispatch
  }

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider')
  }

  return context
}

export default AppContext

import React, { createContext, useContext, useState } from 'react'

const NumberContext = createContext()

export const NumberProvider = ({ children, value = 0 }) => {
  const [number, setNumber] = useState(value)

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const postValue = { number, setNumber }

  return (
    <NumberContext.Provider value={postValue}>
      {children}
    </NumberContext.Provider>
  )
}

export const NumberContextValue = () => {
  const value = useContext(NumberContext)
  if (value === undefined) {
    return undefined
  }
  return value
}

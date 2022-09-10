import React from 'react'
import { NumberContextValue } from './NumberContext'

const ComponentA2 = () => {
  const { number, setNumber } = NumberContextValue()

  const handleClick = () => {
    setNumber(number + 1)
  }

  return (
    <div>
      <h2>ComponentA2 - {number}</h2>
      <button type="button" onClick={handleClick}>
        Add
      </button>
    </div>
  )
}
export default ComponentA2

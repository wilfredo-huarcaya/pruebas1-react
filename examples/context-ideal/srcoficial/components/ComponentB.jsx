import React from 'react'
import { NumberContextValue } from './NumberContext'

const ComponentB = () => {
  const { number } = NumberContextValue()
  return (
    <div>
      <h2>ComponentB - {number}</h2>
    </div>
  )
}
export default ComponentB

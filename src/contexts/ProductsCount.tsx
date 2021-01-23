import React, { createContext, useState } from 'react'
import { DefaultValue, AuxProps } from '../interface/ContextProps'

export const CountContext = createContext<DefaultValue | number>(0)

const CountProvider = ({ children }: AuxProps): JSX.Element => {
  const getCount =
    typeof window !== 'undefined' ? localStorage.getItem('count') : 0

  const [count, setCount] = useState(getCount)

  function handleCount() {
    setCount(Number(count) + 1)

    JSON.stringify(
      localStorage.setItem('count', JSON.stringify(Number(count) + 1))
    )
  }

  return (
    <CountContext.Provider value={{ count, handleCount }}>
      {children}
    </CountContext.Provider>
  )
}

export default CountProvider

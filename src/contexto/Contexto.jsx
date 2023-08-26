import React, { useState } from 'react'
import { createContext } from 'react'

export const Contexto = createContext()

export const Datos = ({children}) => {
    const [count, setCount] = useState(0)
  return (
    <Contexto.Provider value={{count, setCount}}>
        {children}
    </Contexto.Provider>
  )
}


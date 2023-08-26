import React from 'react'
import { createContext } from 'react'

export const Contexto = createContext()

export const Datos = ({children}) => {
  return (
    <Contexto.Provider>
        {children}
    </Contexto.Provider>
  )
}


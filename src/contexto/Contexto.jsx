import React, { useState } from 'react'
import { createContext } from 'react'

export const Contexto = createContext()

export const Datos = ({children}) => {

  return (
    <Contexto.Provider value={{}}>
        {children}
    </Contexto.Provider>
  )
}


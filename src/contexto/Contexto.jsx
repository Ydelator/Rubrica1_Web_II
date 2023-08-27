import React, { useState } from 'react'
import { createContext } from 'react'

export const Contexto = createContext()

export const Datos = ({children}) => {
    const [favorito1, setFav1] = React.useState(false)
    const [favorito2, setFav2] = React.useState(false)
    const [favorito3, setFav3] = React.useState(false)
    const [favorito4, setFav4] = React.useState(false)
  return (
    <Contexto.Provider value={{favorito1, setFav1, favorito2, setFav2, favorito3, setFav3, favorito4, setFav4}}>
        {children}
    </Contexto.Provider>
  )
}


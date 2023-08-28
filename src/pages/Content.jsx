import React, {useContext} from 'react'
import { Contexto } from '../contexto/Contexto'

const Content = () => {
  const data = useContext(Contexto)

  return (
    <div className='container'>
      {
        data.dataMovie.map((elemento)=>(
          <div className="tarjeta">
          <img src={elemento.image} alt="imagen" />
          <h2>{elemento.titulo}</h2>
          <div className="cuerpo">
            <p className='descripcion'>{elemento.descripcion}</p>
            <h4><b>Categoria:</b> {elemento.categoria}</h4>
            <h5 className='imdb'>IMDB: <a href={elemento.link} target="_blank">{elemento.titulo}</a></h5>
          </div>
        </div>
        ))
      }
      
    </div>
  )
}

export default Content
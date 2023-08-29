import React, {useContext} from 'react'
import { Contexto } from '../contexto/Contexto'

const Content = () => {
  const data = useContext(Contexto)

  const [selectedCategory, setSelectedCategory] = React.useState('Todas');

  const categories = ['Todas', ...new Set(data.dataMovie.map(item => item.categoria))];

  const filteredData = selectedCategory !== 'Todas' ? data.dataMovie.filter(item => item.categoria === selectedCategory) : data.dataMovie;

  return (
    <div>
        <div className="filtro">
          <label htmlFor="categorySelect">Selecciona una categoría:</label>
            <select
              id="categorySelect"
              className="formcontrol"
              value={selectedCategory}
              onChange={event => setSelectedCategory(event.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category} >
                  
                  {category}
                </option>
              ))}
            </select>
          </div>
      <div className='container'>
        {filteredData.map((elemento) => (
          <div className="tarjeta">
          <img src={elemento.image} alt="imagen" />
          <h2>{elemento.titulo}</h2>
          <div className="cuerpo">
            <p className='descripcion'>{elemento.descripcion}</p>
            <h4><b>Categoria:</b> {elemento.categoria}</h4>
            <h5 className='imdb'>IMDB: <a href={elemento.link} target="_blank">{elemento.titulo}</a></h5>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  )
}

export default Content
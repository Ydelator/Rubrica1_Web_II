import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const data = [
  {
    title: 'La noche del demonio: La puerta roja',
    category: 'Terror',
    descripcion: 'Nueve años después, Josh y Renai se han divorciado, Lorraine ha fallecido y Dalton ha ingresado en la universidad. Allí, los demonios del pasado resurgen para atormentarlo mientras, al mismo tiempo, Josh empieza a tener visiones de su padre.',
    image: 'https://mx.web.img2.acsta.net/pictures/23/06/07/21/09/0726541.jpg'
  },
  {
    title: 'Sherperd',
    category: 'Terror',
    descripcion: 'Eric Black está perdido tras la misteriosa muerte de su adúltera esposa. Huyendo de su pasado hacia un nuevo trabajo como pastor, se encuentra atrapado y solo en una isla majestuosa y erosionada con un secreto que no presagia nada bueno. La locura en ascenso de un hombre se encuentra con una fuerza sobrenatural vengativa. Lo que comienza como una escapada perfecta azotada por el viento se convierte en una carrera para salvar su cordura y su vida.',
    image: 'https://mx.web.img2.acsta.net/pictures/23/06/07/21/09/0726541.jpg'
  },
  { title: 'Tarjeta 2', category: 'Categoría 2' },
  { title: 'Tarjeta 3', category: 'Categoría 3' },
  // Agrega más tarjetas según sea necesario...
];

const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', new Set(data.map(item => item.category))];

  const filteredData = selectedCategory !== 'Todas' ? data.filter(item => item.category === selectedCategory) : data;

  return (
    // tarjeta 1

    <div>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="categorySelect">Selecciona una categoría:</label>
          <select
            id="categorySelect"
            className="form-control"
            value={selectedCategory}
            onChange={event => setSelectedCategory(event.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* tarjeta 1 */}
        <Card style={{ width: '18rem' }}>
          {filteredData.map((item, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Img variant="top" src={item.image} alt={`Imagen ${item.category}`} />
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Descripción</Card.Text>
                <Card.Text>{item.descripcion}</Card.Text>
                <Card.Text>Categoria: {item.category}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </Card>
        {/* tarjeta 2 */}
        <Card style={{ width: '18rem' }}>
          {filteredData.map((item, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Img variant="top" src={item.image} alt={`Imagen ${item.category}`} />
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Descripción</Card.Text>
                <Card.Text>{item.descripcion}</Card.Text>
                <Card.Text>Categoria: {item.category}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </Card>
      </div>
    </div>

  )
}

export default Content
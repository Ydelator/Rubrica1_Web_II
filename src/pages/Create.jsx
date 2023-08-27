import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import Content from './Content';

const Create = () => {
  const [formulario, setFormulario] = useState({
    titulo: '',
    descripcion: '',
    categoria: '',
    equipo: '',
    link: ''
  });

  const [errores, setErrores] = useState({
    titulo: '',
    descripcion: '',
    categoria: '',
    equipo: '',
    link: ''
  });

  const validarCampo = (campo, valor) => {
    switch (campo) {
      case 'titulo':
        if (valor.length < 3 || valor.length > 20) {
          return 'El título debe tener entre 3 y 20 caracteres';
        }
        break;
      case 'descripcion':
        if (valor.length < 50 || valor.length > 200) {
          return 'La descripción debe tener entre 50 y 200 caracteres';
        }
        break;
      case 'equipo':
        if (valor.length < 3 || valor.length > 15) {
          return 'El equipo debe tener entre 3 y 15 caracteres';
        }
        break;
      case 'link':
        if (valor.length < 10 || valor.length > 50) {
          return 'El link debe tener entre 10 y 50 caracteres';
        }
        break;
      default:
        break;
    }
    return '';
  };

  const handleChange = (campo, valor) => {
    const error = validarCampo(campo, valor);
    setErrores({ ...errores, [campo]: error });
    setFormulario({ ...formulario, [campo]: valor });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar la lógica de envío del formulario aquí si es necesario
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>
          <h1 className="text-center">Formulario</h1>
          <Card style={{ width: '40rem' }} >
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="titulo">
                  <Form.Label>Título:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formulario.titulo}
                    onChange={(e) => handleChange('titulo', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.titulo}</Form.Text>
                </Form.Group>
                <Form.Group controlId="descripcion">
                  <Form.Label>Descripción:</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={formulario.descripcion}
                    onChange={(e) => handleChange('descripcion', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.descripcion}</Form.Text>
                </Form.Group>
                <Form.Group controlId="categoria">
                  <Form.Label>Categoría:</Form.Label>
                  <Form.Control
                    as="select"
                    value={formulario.categoria}
                    onChange={(e) => handleChange('categoria', e.target.value)}
                  >
                    <option value="">Seleccione una categoría</option>
                    <option value="categoria1">Categoría 1</option>
                    <option value="categoria2">Categoría 2</option>
                  </Form.Control>
                  <Form.Text className="text-danger">{errores.categoria}</Form.Text>
                </Form.Group>
                <Form.Group controlId="equipo">
                  <Form.Label>Equipo:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formulario.equipo}
                    onChange={(e) => handleChange('equipo', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.equipo}</Form.Text>
                </Form.Group>
                <Form.Group controlId="link">
                  <Form.Label>Link:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formulario.link}
                    onChange={(e) => handleChange('link', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.link}</Form.Text>
                </Form.Group>
                <br />
                <Button type="submit">Guardar</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Create;

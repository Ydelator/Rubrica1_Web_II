import React, { useState, useContext } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Contexto } from '../contexto/Contexto';


const Create = (props) => {
  const contexto = useContext(Contexto)
  const [formulario, setFormulario] = useState({
    titulo: '',
    descripcion: '',
    image:'',
    categoria: '',
    link: ''
  });

  const [errores, setErrores] = useState({
    titulo: '',
    descripcion: '',
    image:'',
    categoria: '',
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
      case 'image':
        if (valor.length < 10 || valor.length > 200) {
          return 'El link de imagen debe tener entre 10 y 200 caracteres';
        }
        break;
      case 'link':
        if (valor.length < 10 || valor.length > 50) {
          return 'El link de informacion debe tener entre 10 y 50 caracteres';
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

  const handleSubmit = () => {
    if (validarCampo('titulo', formulario.titulo) || validarCampo('descripcion', formulario.descripcion)||validarCampo('image', formulario.image)||validarCampo('link', formulario.link)) {
      alert("Rellene correctamente los campos indicados")
      return 
    }
    console.log(formulario)
    contexto.setDataMov(current=>[...current, formulario] )
    props.setContent(true)
    props.setCreate(false)
    props.setOver(false)
  };

  return (
    <div className="form-container">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>
          <h1 className="text-center">Formulario</h1>
          <Card className="form-card">
            <Card.Body>
              <Form>
                <Form controlId="titulo">
                  <Form.Label>Título:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formulario.titulo}
                    onChange={(e) => handleChange('titulo', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.titulo}</Form.Text>
                </Form>
                <Form controlId="descripcion">
                  <Form.Label>Descripción:</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={formulario.descripcion}
                    onChange={(e) => handleChange('descripcion', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.descripcion}</Form.Text>
                </Form>
                <Form controlId="categoria">
                  <Form.Label>Categoría:</Form.Label>
                  <Form.Control
                    as="select"
                    value={formulario.categoria}
                    onChange={(e) => handleChange('categoria', e.target.value)}
                  >
                    <option value="">Seleccione una categoría</option>
                    <option value="Terror">Terror</option>
                    <option value="Accion">Accion</option>
                    <option value="Romance">Romance</option>
                  </Form.Control>
                  <Form.Text className="text-danger">{errores.categoria}</Form.Text>
                </Form>
                <Form controlId="image">
                  <Form.Label>Imagen:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formulario.image}
                    onChange={(e) => handleChange('image', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.image}</Form.Text>
                </Form>
                <Form controlId="link">
                  <Form.Label>Link:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formulario.link}
                    onChange={(e) => handleChange('link', e.target.value)}
                  />
                  <Form.Text className="text-danger">{errores.link}</Form.Text>
                </Form>
                <br />
                <Button className="submit-button" type="button" onClick={handleSubmit}>Guardar</Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Create;
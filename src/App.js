// src/App.js
import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="app">
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Row className="w-100" style={{ maxWidth: '400px' }}>
          <Col>
            <Card className="shadow-lg border-0">
              <Card.Body>
                <h2 className="text-center mb-4">Iniciar Sesión en Dios Pablo</h2>
                <Form>
                  <Form.Group id="username" className="mb-3">
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control type="text" required placeholder="Ingrese su nombre de usuario" />
                  </Form.Group>
                  <Form.Group id="password" className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" required placeholder="Ingrese su contraseña" />
                  </Form.Group>
                  <Button className="w-100" type="submit" variant="primary">
                    Iniciar Sesión
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

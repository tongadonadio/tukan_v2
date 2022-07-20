import { useState } from "react";
import { Container, Form, Button, FormSelect } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "./student-add-form.css";

function StudentAddForm() {
  const [newStudent, setNewStudent] = useState({});

  return (
    <div>
      <Container className="form-container">
        <div className="title-form">
          <h1>Agregar estudiante</h1>
          <p>Ingrese los datos solicitados</p>
        </div>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Apellido" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Documento" />
        </Form.Group>
        <Form.Group className="mb-3">
          <DatePicker
            className="form-control"
            placeholderText="Fecha de nacimiento"
            dateFormat="dd/MM/yyyy"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Comentarios" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button size="lg" variant="info">
            Agregar
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default StudentAddForm;

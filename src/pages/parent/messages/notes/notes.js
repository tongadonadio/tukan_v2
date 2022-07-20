import { Button, Col, Form, Row } from "react-bootstrap";
import "./notes.css";

function Notes() {
  return (
    <div>
      <Row>
        <Col>
          <Form.Label>Asunto:</Form.Label>
          <Form.Control type="text" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Comentarios:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Col>
      </Row>
      <br />
      <Row className="send-button">
        <Col>
          <Button variant="primary">Enviar</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Notes;

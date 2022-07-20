import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "./absence.css";

function Absence() {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());

  return (
    <div>
      <Row>
        <Col>
          <Form.Label>Desde:</Form.Label>
          <DatePicker
            className="form-control"
            selected={dateFrom}
            onChange={(date) => setDateFrom(date)}
            dateFormat="dd/MM/yyyy"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Hasta:</Form.Label>
          <DatePicker
            className="form-control"
            selected={dateTo}
            onChange={(date) => setDateTo(date)}
            dateFormat="dd/MM/yyyy"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Motivo:</Form.Label>
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

export default Absence;

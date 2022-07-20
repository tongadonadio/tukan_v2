import ActivityType from "./activity-type";
import DatePicker from "react-datepicker";
import "./activity-form.css";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function ActivityForm(props) {
  const [filterDateFrom, setFilterDateFrom] = useState(new Date());
  const [filterDateTo, setFilterDateTo] = useState(new Date());

  return (
    <div className="activity-form-container">
      <ActivityType />
      <div className="decoration-margins" />

      <Row>
        <Col>
          <Form.Label>Desde:</Form.Label>
          <DatePicker
            className="form-control"
            selected={filterDateFrom}
            onChange={(date) => setFilterDateFrom(date)}
            dateFormat="dd/MM/yyyy"
          />
        </Col>
        <Col>
          <Form.Label>Hasta:</Form.Label>
          <DatePicker
            className="form-control"
            selected={filterDateTo}
            onChange={(date) => setFilterDateTo(date)}
            dateFormat="dd/MM/yyyy"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Label>Notas:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="col-cancel">
          <Button variant="primary" onClick={props.formConfirm}>
            Cancelar
          </Button>
        </Col>
        <Col>
          <Button variant="primary" onClick={props.formConfirm}>
            Guardar
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ActivityForm;

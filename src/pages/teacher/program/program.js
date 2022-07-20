import { useState } from "react";
import TopMenu from "../../common/menu/top/top-menu";
import BottomMenu from "../../common/menu/bottom/bottom-menu";
import DatePicker from "react-datepicker";
import "./program.css";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

function Program() {
  const program = [
    { id: 1, from: "08:00am", to: "09:00am", name: "Revisión de deberes" },
    { id: 2, from: "09:00am", to: "12:00am", name: "Clases" },
    { id: 3, from: "12:00am", to: "13:00pm", name: "Almuerzo" },
    { id: 4, from: "13:00pm", to: "15:00pm", name: "Actividad física" },
    { id: 5, from: "15:00pm", to: "16:00pm", name: "Inglés" },
    { id: 6, from: "16:00pm", to: "17:00pm", name: "Música" },
  ];

  const [date, setDate] = useState(new Date());

  return (
    <div>
      <TopMenu title="Programa" />

      <Container>
        <div className="date-container">
          <h5>Fecha:</h5>
          <DatePicker
            className="form-control"
            selected={date}
            onChange={(value) => setDate(value)}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <Button className="add-button" variant="primary">
          Agregar
        </Button>

        <Card className="planification-card">
          <Card.Header>Planificación</Card.Header>
          <ListGroup variant="flush">
            {program.map((p) => (
              <ListGroup.Item>
                <Row>
                  <Col xs={4}>
                    {p.from} {p.to}
                  </Col>
                  <Col>
                    <h6>{p.name}</h6>
                  </Col>
                  <Col className="trash-column" xs={2}>
                    <Trash />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Container>

      <BottomMenu />
    </div>
  );
}

export default Program;

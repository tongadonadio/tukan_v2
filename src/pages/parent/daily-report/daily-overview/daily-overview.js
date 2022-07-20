import { Col, ListGroup, Row } from "react-bootstrap";

function DailyOverview() {
  return (
    <div>
      <h1>Resumen del día</h1>
      <p>
        Hoy realizamos una actividad de recreación la cual intenta integrar a
        todos los alumnos en un juego de mesa llamado "Ludo"
      </p>

      <ListGroup>
        <ListGroup.Item>
          <Row>
            <Col xs={4}>
              <h6>Actividad</h6>
            </Col>
            <Col xs={8}>
              <p>Jugamos al ludo de 9 a 11</p>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={4}>
              <h6>Siesta</h6>
            </Col>
            <Col xs={8}>
              <p>De 11 a 12</p>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={4}>
              <h6>Baño</h6>
            </Col>
            <Col xs={8}>
              <p>-</p>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={4}>
              <h6>Incidentes</h6>
            </Col>
            <Col xs={8}>
              <p>-</p>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={4}>
              <h6>Almuerzo</h6>
            </Col>
            <Col xs={8}>
              <p>Almorzamos carne al horno con papas</p>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={4}>
              <h6>Medicación</h6>
            </Col>
            <Col xs={8}>
              <p>-</p>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default DailyOverview;

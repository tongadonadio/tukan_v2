import { Button, Card, Col, Row } from "react-bootstrap";
import ChildImage from "../../../../imgs/mocks/child_image.jpeg";
import "./gallery.css";

function Gallery() {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Body className="card-img">
              <Card.Img src={ChildImage} />
            </Card.Body>
          </Card>
          <Button className="card-btn" variant="success">
            Aceptar
          </Button>
          <Button className="card-btn" variant="danger">
            Rechazar
          </Button>
        </Col>
        <Col>
          <Card>
            <Card.Body className="card-img">
              <Card.Img src={ChildImage} />
            </Card.Body>
          </Card>
          <Button className="card-btn" variant="success">
            Aceptar
          </Button>
          <Button className="card-btn" variant="danger">
            Rechazar
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card>
            <Card.Body className="card-img">
              <Card.Img src={ChildImage} />
            </Card.Body>
          </Card>
          <Button className="card-btn" variant="success">
            Aceptar
          </Button>
          <Button className="card-btn" variant="danger">
            Rechazar
          </Button>
        </Col>
        <Col>
          <Card>
            <Card.Body className="card-img">
              <Card.Img src={ChildImage} />
            </Card.Body>
          </Card>
          <Button className="card-btn" variant="success">
            Aceptar
          </Button>
          <Button className="card-btn" variant="danger">
            Rechazar
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Gallery;

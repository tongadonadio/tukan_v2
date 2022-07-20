import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BottomMenu from "../../common/menu/bottom/bottom-menu";
import TopMenu from "../../common/menu/top/top-menu";
import CameraIcon from "../../../imgs/parent/camera.jpg";
import MessageIcon from "../../../imgs/parent/messages.png";
import MemoriesIcon from "../../../imgs/parent/memories.png";
import DailyReportIcon from "../../../imgs/parent/daily_report.jpg";
import CommunicationsIcon from "../../../imgs/parent/communications.png";
import "./home.css";

function ParentHome() {
  return (
    <div>
      <TopMenu title="Inicio" />
      <Container>
        <Row className="home-card-row">
          <Col xs={1} />
          <Col className="home-card-col">
            <Card className="clicked-card">
              <Card.Body>
                <Link className="custom-link" to="messages">
                  <Card.Img src={MessageIcon} />
                </Link>
              </Card.Body>
            </Card>
            <p>Mensajes</p>
          </Col>
          <Col className="home-card-col">
            <Card className="clicked-card">
              <Card.Body>
                <Link className="custom-link" to="photos">
                  <Card.Img src={CameraIcon} />
                </Link>
              </Card.Body>
            </Card>
            <p>Fotos</p>
          </Col>
          <Col xs={1} />
        </Row>

        <Row className="home-card-row">
          <Col className="home-card-col">
            <Card className="clicked-card">
              <Card.Body>
                <Link className="custom-link" to="daily-report">
                  <Card.Img src={DailyReportIcon} />
                </Link>
              </Card.Body>
            </Card>
            <p>Reportes</p>
          </Col>
          <Col className="home-card-col">
            <Card className="clicked-card">
              <Card.Body>
                <Card.Img src={CommunicationsIcon} />
              </Card.Body>
            </Card>
            <p>Comunicados</p>
          </Col>
          <Col className="home-card-col">
            <Card className="clicked-card">
              <Card.Body>
                <Card.Img src={MemoriesIcon} />
              </Card.Body>
            </Card>
            <p>Memorias</p>
          </Col>
        </Row>
      </Container>

      <BottomMenu />
    </div>
  );
}

export default ParentHome;

import { Card, Container, Row } from "react-bootstrap";
import checklistIcon from "../../../imgs/checklist.png";
import programIcon from "../../../imgs/program.png";
import galleryIcon from "../../../imgs/gallery.png";
import activityIcon from "../../../imgs/activity.png";
import BottomMenu from "../../common/menu/bottom/bottom-menu";
import TopMenu from "../../common/menu/top/top-menu";
import "./home.css";
import { Link } from "react-router-dom";

function TeacherHome() {
  return (
    <div>
      <TopMenu title="Inicio" />

      <Container>
        <Row className="card-row">
          <Card body className="card-body attendance-card">
            <Link className="custom-link" to="attendance">
              <img src={checklistIcon} className="card-image" alt="checklist" />
              Asistencia
            </Link>
          </Card>
        </Row>
        <Row className="card-row">
          <Card body className="card-body gallery-card">
            <Link className="custom-link" to="gallery">
              <img src={galleryIcon} className="card-image" alt="checklist" />
              Galería
            </Link>
          </Card>
        </Row>
        <Row className="card-row">
          <Card body className="card-body program-card">
            <Link className="custom-link" to="program">
              <img src={programIcon} className="card-image" alt="checklist" />
              Programa
            </Link>
          </Card>
        </Row>
        <Row className="card-row">
          <Card body className="card-body activity-card">
            <Link className="custom-link" to="activity">
              <img src={activityIcon} className="card-image" alt="checklist" />
              Actividad
            </Link>
          </Card>
        </Row>
      </Container>

      <BottomMenu />
    </div>
  );
}

export default TeacherHome;

import { Card, Col, Row } from "react-bootstrap";
import FoodIcon from "../../../../imgs/food_icon.png";
import HealthIcon from "../../../../imgs/health_icon.png";
import NapIcon from "../../../../imgs/nap_icon.png";
import OtherIcon from "../../../../imgs/other_icon.png";
import ToiletIcon from "../../../../imgs/toilet_icon.png";
import "./activity-form.css";

function ActivityType() {
  return (
    <div>
      <Row>
        <h6>Tipo de actividad:</h6>
      </Row>
      <Row>
        <Col>
          <Card className="clicked-card">
            <Card.Body>
              <Card.Img src={NapIcon} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="clicked-card">
            <Card.Body>
              <Card.Img src={ToiletIcon} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="clicked-card">
            <Card.Body>
              <Card.Img src={HealthIcon} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="activity-type-row">
        <Col xs={2} />
        <Col>
          <Card className="clicked-card">
            <Card.Body>
              <Card.Img src={FoodIcon} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="clicked-card">
            <Card.Body>
              <Card.Img src={OtherIcon} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2} />
      </Row>
    </div>
  );
}

export default ActivityType;

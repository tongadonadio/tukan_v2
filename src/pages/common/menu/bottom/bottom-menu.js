import { Container, Navbar } from "react-bootstrap";
import {
  HouseDoor,
  ChatDots,
  Camera,
  People,
  List,
} from "react-bootstrap-icons";
import "./bottom-menu.css";

function BottomMenu() {
  return (
    <Navbar fixed="bottom" className="bar-menu" bg="light">
      <Container>
        <Navbar.Brand>
          <HouseDoor />
        </Navbar.Brand>
        <Navbar.Brand>
          <ChatDots />
        </Navbar.Brand>
        <Navbar.Brand>
          <Camera />
        </Navbar.Brand>
        <Navbar.Brand>
          <People />
        </Navbar.Brand>
        <Navbar.Brand>
          <List />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BottomMenu;

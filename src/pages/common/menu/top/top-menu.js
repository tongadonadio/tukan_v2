import { Container, Navbar } from "react-bootstrap";
import userIcon from "../../../../imgs/user_icon.png";
import "./top-menu.css";

function TopMenu(props) {
  return (
    <Navbar className="bar-menu" bg="light">
      <Container>
        <Navbar.Brand>{props.title}</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Pepito</Navbar.Text>
          <img src={userIcon} className="user-icon" alt="user_icon" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopMenu;

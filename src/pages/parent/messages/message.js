import { useState } from "react";
import BottomMenu from "../../common/menu/bottom/bottom-menu";
import TopMenu from "../../common/menu/top/top-menu";
import { Container, Nav } from "react-bootstrap";
import Absence from "./absence/absence";
import Gallery from "./gallery/gallery";
import Health from "./health/health";
import Notes from "./notes/notes";
import "./message.css";

function Messages() {
  const tabs = ["Ausencia", "Galería", "Salud", "Notas"];
  const [showAbsenceMessage, setShowAbsenceMessage] = useState(true);
  const [showGalleryMessage, setShowGalleryMessage] = useState(false);
  const [showHealthMessage, setShowHealthMessage] = useState(false);
  const [showNotesMessage, setShowNotesMessage] = useState(false);

  const handleOnClickTab = (tab) => {
    setShowAbsenceMessage(tab === "Ausencia");
    setShowGalleryMessage(tab === "Galería");
    setShowHealthMessage(tab === "Salud");
    setShowNotesMessage(tab === "Notas");
  };

  return (
    <div>
      <TopMenu title="Mensaje" />

      <Nav
        className="message-tabs"
        fill
        variant="tabs"
        defaultActiveKey="Ausencia"
      >
        {tabs.map((tab) => (
          <Nav.Item onClick={() => handleOnClickTab(tab)}>
            <Nav.Link className="message-link-tab" key={tab} eventKey={tab}>
              {tab}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Container className="messages-container">
        {showAbsenceMessage && <Absence />}
        {showGalleryMessage && <Gallery />}
        {showHealthMessage && <Health />}
        {showNotesMessage && <Notes />}
      </Container>

      <BottomMenu />
    </div>
  );
}

export default Messages;

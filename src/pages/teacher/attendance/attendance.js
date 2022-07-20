import { useState } from "react";
import BottomMenu from "../../common/menu/bottom/bottom-menu";
import TopMenu from "../../common/menu/top/top-menu";
import { Nav } from "react-bootstrap";
import "./attendance.css";
import AttendanceList from "./attendance-list/attendance-list";
import AbsenceList from "./absence-list/absence-list";
import StudentAddForm from "./student-add-form/student-add-form";

function Attendance() {
  const tabs = ["Lista", "Ausencias", "Agregar alumno"];
  const [showAttendanceList, setShowAttendanceList] = useState(true);
  const [showAbsenceList, setShowAbsenceList] = useState(false);
  const [showStudentAddForm, setShowStudentAddForm] = useState(false);

  const handleOnClickTab = (tab) => {
    setShowAttendanceList(tab === "Lista");
    setShowAbsenceList(tab === "Ausencias");
    setShowStudentAddForm(tab === "Agregar alumno");
  };

  return (
    <div>
      <TopMenu title="Asistencias" />

      <Nav
        className="attendance-tabs"
        fill
        variant="tabs"
        defaultActiveKey="Lista"
      >
        {tabs.map((tab) => (
          <Nav.Item onClick={() => handleOnClickTab(tab)}>
            <Nav.Link className="attendance-link-tab" key={tab} eventKey={tab}>
              {tab}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {showAttendanceList && <AttendanceList />}
      {showAbsenceList && <AbsenceList />}
      {showStudentAddForm && <StudentAddForm />}

      <BottomMenu />
    </div>
  );
}

export default Attendance;

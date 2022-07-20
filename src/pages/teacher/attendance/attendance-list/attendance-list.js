import { useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import childImage from "../../../../imgs/mocks/child_image.jpeg";
import "./attendance-list.css";

function AttendanceList() {
  const [filterDate, setFilterDate] = useState(new Date());

  const attendanceType = {
    PRESENT: 0,
    ABSENCE: 1,
    LATE: 2,
  };
  const studentsAttendance = [
    {
      name: "Antonio",
      last_name: "Gimenez",
      attendance: attendanceType.ABSENCE,
    },
    {
      name: "Jose",
      last_name: "Gonzalez",
      attendance: attendanceType.ABSENCE,
    },
    {
      name: "Manuel",
      last_name: "Perez",
      attendance: attendanceType.ABSENCE,
    },
    {
      name: "Francisco",
      last_name: "Lopez",
      attendance: attendanceType.ABSENCE,
    },
    {
      name: "David",
      last_name: "Rodriguez",
      attendance: attendanceType.ABSENCE,
    },
    {
      name: "Juan",
      last_name: "Alvarez",
      attendance: attendanceType.ABSENCE,
    },
  ];

  return (
    <div>
      <Container className="datepicker-container">
        <p className="date-text">Fecha:</p>
        <div className="datepicker">
          <DatePicker
            className="form-control"
            selected={filterDate}
            onChange={(date) => setFilterDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </Container>

      <Table hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th className="attendance-check">Asistencia</th>
          </tr>
        </thead>
        <tbody className="attendance-list-text">
          {studentsAttendance.map((student, i) => (
            <tr key={i}>
              <td>
                <img
                  src={childImage}
                  className="student-attendance-img"
                  alt="student"
                />
              </td>
              <td>{student.name}</td>
              <td>{student.last_name}</td>
              <td className="student-attendance-checkbox">
                <Form.Check inline name="attended" type="checkbox" />
                <Form.Check inline name="late" type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AttendanceList;

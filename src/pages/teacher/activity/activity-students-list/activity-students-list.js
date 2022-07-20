import { useState } from "react";
import { Button, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import StudentImage from "../../../../imgs/mocks/child_image.jpeg";
import { Search } from "react-bootstrap-icons";
import "./activity-students-list.css";

function ActivityStudentsList(props) {
  const students = [
    { id: 1, name: "Kenley", last_name: "Dalton", participation: false },
    { id: 2, name: "Kyan", last_name: "Underwood", participation: false },
    { id: 3, name: "Jaiden", last_name: "Terry", participation: false },
    { id: 4, name: "Hannah", last_name: "Austin", participation: false },
    { id: 5, name: "Leah", last_name: "Tate", participation: false },
    { id: 6, name: "Lance", last_name: "Knight", participation: false },
    { id: 7, name: "Brice", last_name: "Gould", participation: false },
  ];

  const [filteredStudents, setFilteredStudents] = useState(students);

  const filterStudents = (e) => {
    var value = e.target.value;
    if (value.trim().length !== 0) {
      var auxStudents = students.filter(
        (student) =>
          student.name.toLowerCase().includes(value) ||
          student.last_name.toLowerCase().includes(value)
      );
      setFilteredStudents(auxStudents);
    } else {
      setFilteredStudents(students);
    }
  };

  const groupParticipationChange = (e) => {
    var value = e.target.checked;

    var auxStudents = filteredStudents.map((student) => {
      return { ...student, participation: value };
    });

    setFilteredStudents(auxStudents);
  };

  const studentParticipationChange = (value, id) => {
    var student = filteredStudents.find((student) => student.id == id);
    student.participation = value;

    setFilteredStudents([...filteredStudents]);
  };

  return (
    <div>
      <h6 className="activity-title">Lista de estudiantes</h6>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Buscar estudiante"
          onChange={filterStudents}
        />
        <InputGroup.Text id="basic-addon1">
          <Search />
        </InputGroup.Text>
      </InputGroup>

      <Table className="students-table" hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>
              <Form.Check
                type="switch"
                id="custom-switch"
                onChange={groupParticipationChange}
              ></Form.Check>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, i) => (
            <tr key={i}>
              <td>
                <img src={StudentImage} className="student-img" alt="student" />
              </td>
              <td>{student.name}</td>
              <td>{student.last_name}</td>
              <td>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  checked={student.participation}
                  onChange={(e) =>
                    studentParticipationChange(e.target.checked, student.id)
                  }
                ></Form.Check>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row>
        <Col className="col-cancel">
          <Button variant="primary" onClick={props.formConfirm}>
            Siguiente
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ActivityStudentsList;

import { Table } from "react-bootstrap";
import ChildImage from "../../../../imgs/mocks/child_image.jpeg";
import "./absence-list.css";

function AbsenceList() {
  const studentsAbsences = [
    {
      name: "Antonio",
      last_name: "Gimenez",
      absences: 5,
    },
    {
      name: "Jose",
      last_name: "Gonzalez",
      absences: 7,
    },
    {
      name: "Manuel",
      last_name: "Perez",
      absences: 1,
    },
    {
      name: "Francisco",
      last_name: "Lopez",
      absences: 0,
    },
    {
      name: "David",
      last_name: "Rodriguez",
      absences: 3,
    },
    {
      name: "Juan",
      last_name: "Alvarez",
      absences: 5,
    },
  ];

  return (
    <Table className="absence-table" hover size="sm">
      <thead>
        <tr>
          <th></th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Inasistencias</th>
        </tr>
      </thead>
      <tbody>
        {studentsAbsences.map((student, i) => (
          <tr key={i}>
            <td>
              <img
                src={ChildImage}
                className="student-absence-img"
                alt="student"
              />
            </td>
            <td>{student.name}</td>
            <td>{student.last_name}</td>
            <td className="absence-count">{student.absences}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AbsenceList;

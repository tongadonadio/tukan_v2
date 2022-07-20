import Picture from "../../../../imgs/mocks/class_group_activity.jpeg";

function DailyPicture() {
  return (
    <div>
      <img src={Picture} className="daily-picture" alt="daily_picture" />
      <h2>Foto del día!</h2>
      <p>Hoy participaron todos los alumnos en una actividad de recración</p>
    </div>
  );
}

export default DailyPicture;

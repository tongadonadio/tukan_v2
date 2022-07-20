import { Carousel } from "react-bootstrap";
import ClassGroupImg from "../../../../imgs/mocks/class_group.jpeg";
import ClassGroupActivityImg from "../../../../imgs/mocks/class_group_activity.jpeg";
import "./cover-photos.css";

function CoverPhotos() {
  const photos = [
    { source: ClassGroupImg, name: "Grupo 1" },
    { source: ClassGroupActivityImg, name: "Actividad grupal" },
  ];

  return (
    <div>
      <Carousel>
        {photos.map((photo, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100 cover-photo"
              src={photo.source}
              alt={photo.name}
            />
            <Carousel.Caption>
              <h3>{photo.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CoverPhotos;

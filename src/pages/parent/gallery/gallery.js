import BottomMenu from "../../common/menu/bottom/bottom-menu";
import TopMenu from "../../common/menu/top/top-menu";
import "./gallery.css";

import Photo1 from "../../../imgs/mocks/gallery_activity_1.jpeg";
import Photo2 from "../../../imgs/mocks/gallery_activity_2.jpeg";
import Photo3 from "../../../imgs/mocks/gallery_student_1.jpeg";
import Photo4 from "../../../imgs/mocks/gallery_student_2.jpeg";
import Photo5 from "../../../imgs/mocks/gallery_student_3.jpeg";
import { Carousel, Col, Container, Row } from "react-bootstrap";

function Gallery() {
  const photos = [
    {
      date: "28/05/2022",
      count: 3,
      photos: [
        { source: Photo3, name: "Clase 1" },
        { source: Photo4, name: "Clase 2" },
        { source: Photo5, name: "Clase 3" },
      ],
    },
    {
      date: "14/06/2022",
      count: 2,
      photos: [
        { source: Photo1, name: "Vivero 1" },
        { source: Photo2, name: "Vivero 2" },
      ],
    },
    {
      date: "01/07/2022",
      count: 2,
      photos: [
        { source: Photo1, name: "Vivero 1" },
        { source: Photo2, name: "Vivero 2" },
      ],
    },
    {
      date: "05/09/2022",
      count: 3,
      photos: [
        { source: Photo3, name: "Clase 1" },
        { source: Photo4, name: "Clase 2" },
        { source: Photo5, name: "Clase 3" },
      ],
    },
  ];

  return (
    <div>
      <TopMenu title="Fotos" />

      <Container>
        <Row>
          {photos &&
            photos.map((p, i) => {
              return (
                <Col xs={6} key={i}>
                  <Carousel interval={null}>
                    {p.photos.map((photo, j) => (
                      <Carousel.Item className="carousel-card" key={j}>
                        <img
                          className="d-block w-100 photos-carousel"
                          src={photo.source}
                          alt={photo.name}
                        />
                        <Carousel.Caption>
                          <h3>{p.date}</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
              );
            })}
        </Row>
      </Container>

      <BottomMenu />
    </div>
  );
}

export default Gallery;

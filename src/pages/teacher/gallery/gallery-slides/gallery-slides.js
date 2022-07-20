import { Carousel } from "react-bootstrap";
import Photo1 from "../../../../imgs/mocks/gallery_activity_1.jpeg";
import Photo2 from "../../../../imgs/mocks/gallery_activity_2.jpeg";
import Photo3 from "../../../../imgs/mocks/gallery_student_1.jpeg";
import Photo4 from "../../../../imgs/mocks/gallery_student_2.jpeg";
import Photo5 from "../../../../imgs/mocks/gallery_student_3.jpeg";
import "./gallery-slides.css";

function GallerySlides() {
  const photosByDay = [
    {
      date: "28/05/2022",
      activity: "Actividad en vivero",
      photos: [
        { source: Photo3, name: "Clase 1" },
        { source: Photo4, name: "Clase 2" },
        { source: Photo5, name: "Clase 3" },
      ],
    },
    {
      date: "14/06/2022",
      activity: "Actividad en clase",
      photos: [
        { source: Photo1, name: "Vivero 1" },
        { source: Photo2, name: "Vivero 2" },
      ],
    },
  ];

  return (
    <div>
      {photosByDay.map((photoByDay, i) => {
        return (
          <div key={i}>
            <div>
              <p className="title-date">{photoByDay.date}</p>
              <p className="title-name">{photoByDay.activity}</p>
            </div>

            <div className="carousel-container">
              <Carousel>
                {photoByDay.photos.map((photo, j) => (
                  <Carousel.Item key={j}>
                    <img
                      className="d-block w-100 photo-slide"
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
          </div>
        );
      })}
    </div>
  );
}

export default GallerySlides;

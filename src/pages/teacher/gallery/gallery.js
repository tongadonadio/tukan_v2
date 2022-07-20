import BottomMenu from "../../common/menu/bottom/bottom-menu";
import TopMenu from "../../common/menu/top/top-menu";
import CoverPhotos from "./cover-photos/cover-photos";
import GallerySlides from "./gallery-slides/gallery-slides";

function Gallery() {
  return (
    <div>
      <TopMenu title="Galería" />

      <CoverPhotos />

      <GallerySlides />

      <BottomMenu />
    </div>
  );
}

export default Gallery;

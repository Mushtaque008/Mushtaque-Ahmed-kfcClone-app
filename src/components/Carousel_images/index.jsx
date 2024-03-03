import img from "../../assets/photos/carousel.jpg";
import img1 from "../../assets/photos/carousel1.jpg";
import img2 from "../../assets/photos/carousel2.jpg";

import img4 from "../../assets/photos/carousel4.jpg";
import img5 from "../../assets/photos/carousel5.jpg";
import "./Carousel_images.css";
function Carousel() {
  return (
    <div className="imagesWrapper">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} class="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={img4} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img5} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="orderLink" align="center">
        <a href="#">
          {" "}
          <h1> ORDER </h1>{" "}
        </a>
      </div>
    </div>
  );
}

export default Carousel;

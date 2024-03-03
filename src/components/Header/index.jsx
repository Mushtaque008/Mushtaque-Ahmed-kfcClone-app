import img1 from "../../assets/photos/download.png";
import img2 from "../../assets/photos/headerKfcLogo.png";
import img3 from "../../assets/photos/headerDeliveryPic.png";
import img4 from "../../assets/photos/headerPickup.png";
import img5 from "../../assets/photos/headerBucket.svg";

import "./header.css";

function Header() {
  return (
    <div class="fixed-top">
      <div className="headerImages">
        <div className="headerLeft">
          <img className="img1" src={img1} alt="" />

          <img className="img2" src={img2} alt="" />
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-dark me-md-2" type="button">
              <img className="img3" src={img3} alt="" /> DELIVERY
            </button>
            <button class="btn btn-dark" type="button">
              <img className="img4" src={img4} alt="" /> PICKUP
            </button>
          </div>
        </div>

        <div className="headerRight">
          <a href="#">
            <img className="img5" src={img5} alt="" />
          </a>
          <button className="longinButton" type="button" class="btn btn-danger">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

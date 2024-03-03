import img1 from "../../assets/photos/headerKfcLogo.png";
import "./footer.css";
function Footer() {
  return (
    <div className="footerWrapper">
      {" "}
      <div className="container">
        <br></br> <br></br>
        <div className="footWrapper">
          <div className="footerLinks">
            <a href="https://www.kfcpakistan.com/">
              <img className="kfclogofooter" src={img1} alt="" />
            </a>
            <div className="socialMediaIcons">
              <a href="www.youtube.com">
                {" "}
                <img className="imgYoutube" src="/youtube.jpeg" alt="" />{" "}
              </a>
              <a href="www.insta.com">
                {" "}
                <img className="imgInsta" src="insta.jpeg" alt="" />{" "}
              </a>
              <a href="www.facebook.com">
                {" "}
                <img className="imgFacebook" src="facebook.png" alt="" />{" "}
              </a>
              <a href="www.twitter.com">
                {" "}
                <img className="imgTwitter" src="twitter.jpeg" alt="" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="footdiv">
          <div className="one">
            <ul>
              <li>
                <a href="#"> About Us </a>
              </li>
              <li>
                <a href="#">Mitao Bhook </a>
              </li>
              <li>
                <a href="#"> Mitao Bhook - Scholarship </a>
              </li>
              <li>
                <a href="#">Privacy Policy </a>
              </li>
              <li>
                <a href="#">Careers </a>
              </li>
              <li>
                <h3> 2023 KFC , All Rights Reserved </h3>
              </li>
            </ul>
          </div>
          <div className="two">
            <ul>
              <li>
                <a href="#"> Contact Us </a>
              </li>
              <li>
                <a href="#"> Store Locator </a>
              </li>
              <li>
                <a href="#"> Track Order </a>
              </li>
            </ul>
          </div>
          <div className="three">
            <ul>
              <li>
                <a href="#"> Terms & Conditions </a>
              </li>
            </ul>
          </div>
          <div className="four">
            <a href="#">
              {" "}
              <img src="/appleStore.png" alt="" />{" "}
            </a>
            <br></br> <br></br>
            <a href="#">
              {" "}
              <img src="/googleStore.png" alt="" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

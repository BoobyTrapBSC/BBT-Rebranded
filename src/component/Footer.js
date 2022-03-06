import React from "react";
import { FaTelegramPlane, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";
import fGraphic from "../images/footer_graphic.png";

export default function Footer() {
  return (
    <div id="footer-container">
      <div className="row">
        <div className="col-md-6 ps-2">
          <p>Email: <a className="text-decoration-none" style={{ color: "#fff", fontWeight: "500" }} href="mailto:info@boobytrap.live">info@boobytrap.live</a></p>
        </div>
        <div className="col-md-6">
          <a href="https://t.me/boobytrapbsc">
            <FaTelegramPlane size={25} className="text-light mx-3" />
          </a>
          <a href="http://tiktok.com/@boobytrapbsc">
            <FaTiktok size={25} className="text-light mx-3" />
          </a>
          <a href="https://instagram.com/boobytrap_bsc">
            <FaInstagram size={25} className="text-light mx-3" />
          </a>
          <a href="https://twitter.com/BoobyTrapBsc">
            <FaTwitter size={25} className="text-light mx-3" />
          </a>
        </div>
      </div>
      <div className="copyright pt-5 pb-2 ps-2">
        <p>© 2021 Booby Trap. All rights reserved.</p>
      </div>
    </div>
  );
}
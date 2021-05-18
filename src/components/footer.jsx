import React from "react";
import "../css/footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <a href="/" className="logo">
          Pizza
        </a>
        <div className="icons">
          <a href="/">
            <FaFacebook />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaYoutube />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

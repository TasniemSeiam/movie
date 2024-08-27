import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="rightSide">
          <h2>Gll</h2>
          <p>gll@gmail.com</p>
          <ul>
            <li>
              <FaFacebookF size={20} />
            </li>
            <li>
              <FaTwitter size={20} />
            </li>
            <li>
              <FaInstagram size={20} />
            </li>
          </ul>
        </div>
        <div className="leftSide">
          <div>
            <h4>About</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#feature">Features</a>
              </li>
              <li>
                <a href="#news">News & Blogs</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://x.com">Twitter</a>
              </li>
              <li>
                <a href="https://instgram.com">Instagram</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#FAQs">FAQs</a>
              </li>
              <li>
                <a href="#Support">Support Centre</a>
              </li>
              <li>
                <a href="#Contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

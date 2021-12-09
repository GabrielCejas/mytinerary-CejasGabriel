import React from "react";
import {  FaTwitter, FaFacebookSquare, FaLinkedin, FaGoogle } from "react-icons/fa";

const IconsFooter = () => {
  return (
    <div className="icons">
      <h3>
        <FaFacebookSquare />
      </h3>
      <h3>
        <FaTwitter />
      </h3>
      <h3>
        <FaLinkedin />
      </h3>
      <h3>
        <FaGoogle />
      </h3>
    </div>
  );
}
export default IconsFooter;

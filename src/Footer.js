import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>
        Copyright © {currentYear} @Parshv Airbnb clone! No rights reserved- this
        is a demo!
      </p>
      <p>Privacy . Terms . Sitemap . Company Details</p>
    </div>
  );
}

export default Footer;

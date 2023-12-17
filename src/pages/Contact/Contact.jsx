import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact_container">
      <h2>Contact Me ...</h2>
      <div className="contact">
        <div>
          <i className="fa-solid fa-phone "> PHONE</i>
          <h5>+40 (571) 360-1234</h5>
        </div>
        <div>
          <i className="fa-solid fa-location-dot"> ADRESS</i>
          <h5>30 Ağustos Mahallesi Döner Sokak Kütahya</h5>
        </div>
        <div>
          <i class="fa-solid fa-envelope"> EMAIL</i>
          <h5>omercoskun@example.com</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;

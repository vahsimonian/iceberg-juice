import React from "react";
import "./contact.css";
import { RiInstagramFill } from "react-icons/ri";
// import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
// import { RiFacebookCircleLine } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";
// import { PiLinkedinLogo } from "react-icons/pi";

function Contact() {
  return (
    <div id="contact">
      <RiInstagramFill className="icons" />
      {/* <RiInstagramLine className="insgram-icon" /> */}
      <RiFacebookCircleFill className="icons" />
      {/* <RiFacebookCircleLine /> */}
      <RxLinkedinLogo className="icons" />
      {/* <PiLinkedinLogo className="icons" /> */}
    </div>
  );
}

export default Contact;

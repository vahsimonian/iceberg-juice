import React from "react";
import "./contact.css";
import { RiInstagramFill } from "react-icons/ri";
import { RxLinkedinLogo } from "react-icons/rx";
import { GrMail } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

function Contact() {
  return (
    <div id="contact">
      <RiInstagramFill
        className="icons"
        href="https://www.instagram.com/iceberg.kampot/"
        target="_blank"
      />
      <RxLinkedinLogo
        className="icons"
        href="https://www.instagram.com/iceberg.kampot/"
        target="_blank"
      />
      <CgProfile
        className="icons"
        href="https://www.instagram.com/iceberg.kampot/"
        target="_blank"
      />
      <GrMail
        className="icons"
        href="https://www.instagram.com/iceberg.kampot/"
        target="_blank"
      />
      <FaSquareXTwitter
        className="icons"
        href="https://www.instagram.com/iceberg.kampot/"
        target="_blank"
      />
    </div>
  );
}

export default Contact;

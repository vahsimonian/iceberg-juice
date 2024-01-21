import React from 'react';
import './contact.css';
import { RiInstagramFill } from 'react-icons/ri';
import { RxLinkedinLogo } from 'react-icons/rx';
import { GrMail } from 'react-icons/gr';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';

function Contact() {
  return (
    <div id="contact">
      <RiInstagramFill
        size={25}
        className="icons"
        href="https://www.instagram.com/iceberg.kampot/"
        target="_blank"
      />
      <RxLinkedinLogo
        size={25}
        className="icons"
        href="https://www.instagram.com/iceberg.kampot/"
        target="_blank"
      />
      <CgProfile
        size={25}
        className="icons"
        href="https://www.instagram.com/iceberg.kampot/"
        target="_blank"
      />
      <GrMail
        size={25}
        className="icons"
        href="https://www.instagram.com/iceberg.kampot/"
        target="_blank"
      />
      <FaSquareXTwitter
        size={25}
        className="icons"
        href="https://www.instagram.com/iceberg.kampot/"
        target="_blank"
      />
    </div>
  );
}

export default Contact;

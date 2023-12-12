import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoSnapchat } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="contact">
      {/* <div className="navBar">
        <Navbar />
      </div> */}
      <div className="contact-template">
        <div className="contact-left">
          <div className="contact-name">Let's Talk</div>
          <div className="contact-info">
            <div className="user-name">
              <input type="text" name="" id="" placeholder="Name" required />
            </div>
            <div className="user-email">
              <input type="email" name="" id="" placeholder="Email" required />
            </div>
            <div className="user-message">
              <textarea
                name=""
                id=""
                cols="60"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <button> Submit </button>
          </div>
        </div>
        <div className="contact-right">
          <div className="address">
            <div className="address-name">
              <HiOutlineLocationMarker /> Address
            </div>
            <div
              className="address-area"
              onClick={() => {
                window.location.href =
                  "https://maps.app.goo.gl/QQ3C4X6EG5QwoWGV8";
              }}
            >
              Visakhapatnam, Andhra Pradesh, India
            </div>
          </div>
          <hr />
          <div className="contact-details">
            <div
              className="iteme"
              onClick={() => {
                window.location.href =
                  "https://www.instagram.com/________nc007________/";
              }}
            >
              <AiOutlineInstagram />
            </div>
            <div
              className="iteme"
              onClick={() => {
                window.location.href = "mailto: chokkapunaveen260503@gmail.com";
              }}
            >
              <HiOutlineMail />
            </div>
            <div
              className="iteme"
              onClick={() => {
                window.location.href = "tel: 7671016858";
              }}
            >
              <BsTelephone />
            </div>
            <div
              className="iteme"
              onClick={() => {
                window.location.href =
                  "https://www.snapchat.com/add/n_chokkapu21?share_id=mM3itfUN_XA&locale=en-GB";
              }}
            >
              <BiLogoSnapchat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

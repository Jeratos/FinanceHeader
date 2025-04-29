import React from "react";
import "./Contact.css";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function contact() {
  return (
    <>
      {/* first container */}
      <div className="Service pt-2 d-flex flex-wrap ">
        <div className="service-sub-content col-lg-6 col-sm-12">
          <div className="top-op  d-flex justify-content-center align-items-center  col-lg-12 ">
            <h1 className="">Contact Us</h1>
          </div>
        </div>

        <div className="contact-title service-sub-content-2 d-flex flex-column justify-content-center p-4 col-lg-6 col-ms-12">
          <p className="px-5 text-center  ">
            Get In Touch With Us For Best Advice On Business
          </p>
        </div>
      </div>

      {/* sec container  */}

      <div className=" my-5">
        <div className="d-flex flex-wrap justify-content-around">
          <div className=" align-self-center  add d-flex flex-column justify-content-around">
            <h4 style={{ color: "rgb(83, 26, 144)" }}>
              Pay Us A Visit At One Of Our Offices
            </h4>
            <h5 style={{ color: "rgb(83, 26, 144)" }}>Head Quarters</h5>
            <p style={{ color: "rgb(83, 26, 144)" }}>
              212 7th St SE, Washington, DC 20003, USA
            </p>
            <div className="text-secondary ">
              <p>123 456 7890</p>
                <p>info@example.com</p>
              <p className="">

                <a className="text-secondary mx-2" href="#">
                  <TiSocialFacebook />
                </a>
                <a className="text-secondary mx-2" href="#">
                  <FaXTwitter />
                </a>
                <a className="text-secondary mx-2" href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#"></a>
                <a href="#"></a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <iframe
              className="rounded col-sm-12 col-md-12 map my-5"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98311.52814890795!2d-122.52000110408142!3d37.75767131497091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e1!3m2!1sen!2sin!4v1737050531985!5m2!1sen!2sin"
              // width="700"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className=" d-flex flex-wrap flex-lg-nowrap flex-md-nowrap justify-content-between  ">
        <div className="d-flex flex-column align-items-end service-sub-content-2 col-md-4 pb-5 rounded">
          <p className=" pb-5 px-5 pt-5 text-secondary ">Meet Us At</p>
          <div className="about-con-sub-tite col-lg-6 col-md-6 col-sm-12 "></div>
          <h2 className="py-3 px-3 text-md-end  mb-5">Corporate Offices</h2>
        </div>
        <div className="row mx-2 py-5 my-5">
          <div className="col-md-4">
            <h2 style={{ color: "rgb(83, 26, 144)" }}>Philadelphia Office</h2>
            <p className="text-secondary">
              30 Market St, Philadelphia, PA 19104, USA​
            </p>
            <p className="text-secondary">123 456 7890</p>
            <p className="text-secondary">info@example.com</p>
          </div>

          <div className="col-md-4">
            <h2 style={{ color: "rgb(83, 26, 144)" }}>Our Mission</h2>
            <p className="text-secondary">
              30 Market St, Philadelphia, PA 19104, USA​
            </p>
            <p className="text-secondary">123 456 7890</p>
            <p className="text-secondary">info@example.com</p>
          </div>
          <div className="col-md-4">
            <h2 style={{ color: "rgb(83, 26, 144)" }}>Our Values</h2>
            <p className="text-secondary">
              30 Market St, Philadelphia, PA 19104, USA​
            </p>
            <p className="text-secondary">123 456 7890</p>
            <p className="text-secondary">info@example.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

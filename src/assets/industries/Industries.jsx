import React from "react";
import "./Industries.css";
import { Link } from "react-router-dom";
import { MdOutlineTapAndPlay } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { PiNetworkBold } from "react-icons/pi";
import { GiFruitBowl } from "react-icons/gi";
import { FiTruck } from "react-icons/fi";
import { PiCrane } from "react-icons/pi";

export default function Industries() {
  return (
    <>
      <div className="con-industries">
        {/* first container  */}

        <div className="Service pt-2 d-flex my-5 flex-wrap ">
          <div className="industries-sub-content col-lg-6 col-sm-12">
            <div className="top-op  d-flex justify-content-center align-items-center  col-lg-12 ">
              <h1 className="">Industries</h1>
            </div>
          </div>

          <div className="service-sub-content-2 d-flex flex-column justify-content-center p-4 col-lg-6 col-ms-12">
            <h3 className="px-4">We Serve A Huge Range Of Industries </h3>
            <p className="px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aut vitae soluta libero dolores nostrum quam iure
              ullam debitis hic.
            </p>
            <button className="col-lg-3 col-md-3 mx-5 my-3 rounded-5 text-white bg-transparent border-white p-2">
              know more
            </button>
          </div>
        </div>

        {/* sec container  */}

        <div className="Service-2 d-flex flex-column justify-content-center align-items-center m-5 pb-5 ">
          <h1 className="pb-4">Industries We Serve</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
          <Link to={"/contact"} className="bt mt-4 rounded-5 p-2 ">
            CONTACT NOW
          </Link>
        </div>

        {/* third container  */}

        <div className="indus  ">
          <div className="row">
            {/* First Cont */}
            <div className="sub-indus col-lg-6 col-md-6 col-sm-12 d-flex flex-column flex-md-row ">
              <div className="img-1 col-12 col-md-6"></div>
              <div className="col-12 col-md-6 d-flex justify-content-center flex-column px-4 mt-3 mt-md-0">
                <h3 className="pb-3">Healthcare</h3>
                <p className="text-secondary">
                  Sed quia non numquam eius modi tempora incidunt lores ta porro
                  ame
                </p>
              </div>
            </div>
            {/* Second Cont */}
            <div className="sub-indus col-lg-6 col-md-6 col-sm-12 d-flex flex-column flex-md-row ">
              <div className="img-2 col-12 col-md-6"></div>
              <div className="col-12 col-md-6 d-flex justify-content-center flex-column px-md-2 px-4 mt-3 mt-md-0">
                <h3 className="pb-3">Manufacturing</h3>
                <p className="text-secondary">
                  Sed quia non numquam eius modi tempora incidunt lores ta porro
                  ame
                </p>
              </div>
            </div>
            {/* Third Cont */}
            <div className="sub-indus col-lg-6 col-md-6 col-sm-12 d-flex flex-column flex-md-row ">
              <div className="img-3 col-12 col-md-6 order-2 order-md-1"></div>
              <div className="col-12 col-md-6 d-flex justify-content-center flex-column px-4 mt-3 mt-md-0">
                <h3 className="pb-3">Automobile</h3>
                <p className="text-secondary">
                  Sed quia non numquam eius modi tempora incidunt lores ta porro
                  ame
                </p>
              </div>
            </div>
            {/* Fourth Cont */}
            <div className="sub-indus col-lg-6 col-md-6 col-sm-12 d-flex flex-column flex-md-row ">
              <div className="img-4 col-12 col-md-6 order-2 order-md-1"></div>
              <div className="col-12 col-md-6 d-flex justify-content-center flex-column px-4 mt-3 mt-md-0">
                <h3 className="pb-3">Real Estate</h3>
                <p className="text-secondary">
                  Sed quia non numquam eius modi tempora incidunt lores ta porro
                  ame
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-sm-12 p-5">
              <p className="Performance">Performance</p>
              <h2 className="Performance">
                We Help You Track Your Investment Performance
              </h2>
            </div>
            <div className="col-lg-6 col-sm-12 p-5 mt-3 text-secondary">
              <div>
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                consectetur adipisci velit, sed quia non numquam eius modi
                tempora incidunt lores ta porro ame ipsum quia dolor sit amet.
              </div>
            </div>
          </div>
        </div>

  {/* third container  */}

        <div className="other-indus">
          <h2 className="Performance other-indus-head m-5 col-lg-3 px-3 pb-1">Other Industries:</h2>
            <div className="row m-5 ">
             <div className="col-md-4 col-sm-6 p-3 ">
              <h3 className="px-3 Performance">
              <MdOutlineTapAndPlay /> Telecommunication
              ​</h3>
              <p className="px-5 text-secondary">Sed quia non numquam eius modi tempora incidunt lores ta porro</p>
             </div>
             <div className="col-md-4 col-sm-6 p-3 ">
              <h3 className="px-3 Performance">
              <GiArtificialIntelligence /> IT/Software
              </h3>
              <p className="px-5 text-secondary">Sed quia non numquam eius modi tempora incidunt lores ta porro</p>
             </div>
             <div className="col-md-4 col-sm-6 p-3 ">
              <h3 className="px-3 Performance">
              <PiNetworkBold /> Non-profit​
              </h3>
              <p className="px-5 text-secondary">Sed quia non numquam eius modi tempora incidunt lores ta porro</p>
             </div>
             <div className="col-md-4 col-sm-6 p-3 ">
              <h3 className="px-3 Performance">
              <GiFruitBowl /> Agriculture
              ​</h3>
              <p className="px-5 text-secondary">Sed quia non numquam eius modi tempora incidunt lores ta porro</p>
             </div>
             <div className="col-md-4 col-sm-6 p-3 ">
              <h3 className="px-3 Performance">
              <FiTruck /> Transport
              ​</h3>
              <p className="px-5 text-secondary">Sed quia non numquam eius modi tempora incidunt lores ta porro</p>
             </div>
             <div className="col-md-4 col-sm-6 p-3 "> 
              <h3 className="px-3 Performance">
              <PiCrane /> Construction​
              </h3>
              <p className="px-5 text-secondary">Sed quia non numquam eius modi tempora incidunt lores ta porro</p>
              </div>

            </div>

        </div>
      </div>
    </>
  );
}

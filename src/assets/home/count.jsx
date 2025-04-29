import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
// import "./Count.css";

export default function Count() {
  const [countOn, setCountOn] = useState(false);

  return (
    <div className=" count  ">
      <div className=" count-main text-white">
        <h1 className="text-center pt-3">Number Speak</h1>

        <ScrollTrigger onEnter={ ()=>{setCountOn(true)}} onExit={()=>{setCountOn(false)}}>

        <div className="row pt-2 pb-5">
          <div className="col-md-3 col-sm-6 my-5 my-sm-3 d-flex flex-column justify-content-center align-items-center ">
            <h2> {countOn&& <CountUp start={0} end={8} duration={2}/>} </h2>
            <p>Office</p>
          </div>
          <div className="col-md-3 col-sm-6 my-5 my-sm-3 d-flex flex-column justify-content-center align-items-center">
          <h2>{countOn && <CountUp  end={12} duration={2} suffix={'k'}/>} </h2>
          <p>Employee</p>
          </div>
          <div className="col-md-3 col-sm-6 my-5 my-sm-3 d-flex flex-column justify-content-center align-items-center">
          <h2>{countOn && <CountUp start={250} end={350} duration={2}/>} </h2>
          <p>Clients</p>
          </div>
          <div className="col-md-3 col-sm-6 my-5 my-sm-3 d-flex flex-column justify-content-center align-items-center">
          <h2>{countOn && <CountUp  end={7} duration={2}/>} </h2>
          <p>Countries</p>
          </div>
        </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}

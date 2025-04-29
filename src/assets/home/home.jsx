import React, { useContext, useState } from "react";
// import { AuthCentext } from '../context/useContext'
import { usedata } from "../../context/useContext";
import { GiReceiveMoney } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { GiShakingHands } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { LiaFlagCheckeredSolid } from "react-icons/lia";
import { IoPlayForwardOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import Count from "./count";

export default function home() {

  //  let obj= useContext(AuthCentext).obj;
  let { obj } = usedata();
  return (
    <>
    {/* first container  */}
      <div className="home-container mt-5">
        <aside className="title">
          <div className="tite">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <h1>See what set us A part.</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              debitis aliquam molestias dolorum consectetur saepe enim a cumque
              sunt eos veritatis corporis dolore aliquid exercitationem.
              <button className="rounded-4 my-4 mx-3 col-sm-3 p-1 bg-transparent text-white border-white">
                know more
              </button>
            </span>
          </div>
        </aside>
      </div>
      {/* sec container  */}
      <div className="pos d-flex flex-wrap mx-2">
  <div className="col-md-3"></div>
  <div className="know d-flex flex-wrap col-md-9">
    {/* Left Section */}
    <div className="know-left col-lg-4 col-md-12">
      <div className="sub-logo mx-5 px-3 text-center">
        <span>
          <GiReceiveMoney />
        </span>
      </div>
      <div className="sub-left">
        <h3 className="sub-left-h3 mx-3 my-2 p-1 text-center">
          Lorem, ipsum dolor.
        </h3>
        <span className="sub-left-span d-inline-flex flex-column p-3 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          asperiores vel officiis? Amet sed eligendi culpa nihil cum! Autem nihil
          <button className="left-button rounded-4 my-3 mx-auto col-10 col-lg-6 p-1">
            Know More
          </button>
        </span>
      </div>
    </div>
    {/* Right Section */}
    <div className="know-right col-lg-8 col-md-12">
      <div className="top"></div>
      <div className="bot">
        <div className="sub-bot">
          <h3 className="pb-4 bot-head">Lorem ipsum dolor</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum
            quis beatae asperiores, aspernatur aperiam mollitia laborum, dolore
            possim.
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

{/* third container  */}
<div className="know-sec mx-2 my-5 d-flex flex-wrap-reverse col-md-9">
  {/* Left Section */}
  <div className="know-left sec col-lg-4 col-md-12">
    <div className="sub-logo mx-5 px-3 text-center">
      <span>
        <BsGraphUp />
      </span>
    </div>
    <div className="sub-left">
      <h3 className="sub-left-h3 mx-3 my-2 p-1 text-center">Lorem, ipsum dolor.</h3>
      <span className="sub-left-span d-inline-flex flex-column p-3 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        asperiores vel officiis? Amet sed eligendi culpa nihil cum! Autem nihil
        <button className="left-button rounded-4 my-3 mx-auto col-10 col-lg-6 p-1">
          Know More
        </button>
      </span>
    </div>
  </div>
  {/* Right Section */}
  <div className="know-right-sec col-lg-8 col-md-12">
    <div className="top-sec"></div>
    <div className="bot">
      <div className="sub-bot">
        <h3 className="pb-4 bot-head">Lorem ipsum dolor</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum
          quis beatae asperiores, aspernatur aperiam mollitia laborum, dolore
          possim.
        </span>
      </div>
    </div>
  </div>
</div>

{/* fourth container  */}
      <div className=" third my-5 p-3">
        <h1 className="my-3">Our Core Values</h1>
        <span className="p-1">Driving Technology For Leading Brands</span>
        <div className="line mt-4 "></div>
        <div className="lead">
          <div className="com">
            <p className="lo">
              <GiShakingHands />
            </p>
            trust
          </div>
          <div className="com">
            <p className="lo">
              <FaRegEye />
            </p>
            focus
          </div>
          <div className="com">
            <p className="lo">
              <CiGlobe />
            </p>
            Integrity
          </div>
          <div className="com">
            <p className="lo">
              <LiaFlagCheckeredSolid />
            </p>
            Excellence
          </div>
          <div className="com">
            <p className="lo">
              <IoPlayForwardOutline />
            </p>
            Consistency
          </div>
          <div className="com">
            <p className="lo">
              <RiTeamLine />
            </p>
            Team work
          </div>
        </div>
      </div>

{/* fifth container  */}
      <div className="meeting-container">
        <div className="txt px-5">
          <p className="mx-5">learnig...</p>
          <h1 className="txt-head mx-5 ">
            Learning & Development Academy By Oliverwood.
          </h1>
          <button className="rounded-4 my-2 mx-5 col-sm-3 col-lg-2 p-1">
            learn more
          </button>
        </div>
      </div>

{/* sixth container  */}
      <div className="colm  m-5 pb-5">
        <p className="tite-h">We Are Always Focused On</p>
        <h1>Growth​ Of Clients</h1>
        <div className="line m-3"></div>
        <div className="gri row">
          <div className="chil text-secondary my-2 col-md-4">
            <h2 className="chil-h">Investment</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
            deserunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellat, deserunt.
          </div>
          <div className="chil text-secondary my-2 col-md-4">
            <h2 className="chil-h">Loans</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
            deserunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellat, deserunt.
          </div>
          <div className="chil text-secondary my-2 col-md-4">
            <h2 className="chil-h">Business Advice</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
            deserunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellat, deserunt.
          </div>
          <div className="chil text-secondary my-2 col-md-4">
            <h2 className="chil-h">lorem</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
            deserunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellat, deserunt.
          </div>
          <div className="chil text-secondary my-2 col-md-4">
            <h2 className="chil-h">Progress</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
            deserunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellat, deserunt.
          </div>
        </div>
      </div>
      <Count/>
      
    </>
  );
}

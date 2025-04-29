import React from 'react';
import "./About.css";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Count from "../home/count"

export default function about() {
  return (
    <>
     <div className="con-About">

     <div className="Service pt-2 d-flex flex-wrap ">

<div className='about-sub-content col-lg-6 col-sm-12'>
  <div className='top-op  d-flex justify-content-center align-items-center  col-lg-12 '>
  <h1 className='' >About Us</h1>
    
  </div>
</div>

<div className='service-sub-content-2 d-flex flex-column justify-content-center p-4 col-lg-6 col-ms-12'>
       <h3 className='px-4' >We Are "Oliverwood Finance" </h3>
       <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aut vitae soluta libero dolores nostrum quam iure ullam debitis hic.</p>
      <button className='col-lg-3 col-md-3 mx-5 my-3 rounded-5 text-white bg-transparent border-white p-2'>know more</button>
</div>
</div>

{/* sec container  */}
<div className='comp-prof m-5 p-3 row'>
<div className='col-md-3 mx-3 col-sm-12'>
  <p className='comp-prof-subtite pb-5 px-5 text-secondary text-md-end text-sm-center '>Who We Are</p>
  <h2 className='py-3 px-3 text-md-end text-sm-center' style={{ color:"rgb(83, 26, 144)"}}>Company Profile</h2>
</div>
<div className='col-md-8 text-secondary p-0'>
  <p className=''>Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit.</p>
  <div className='col-md-9'>
  Fames sequi placerat, laboris, nascetur posuere incidunt tempus sequi tenetur? Excepturi eum elementum rem, minima? Error, tempore et distinctio porta, earum! Aptent! Tenetur nibh interdum ea impedit pretium, exercitation congue? Ducimus sapien! Montes elementum! Doloribus fuga, molestie dolor fermentum nesciunt, harum esse alias tincidunt, qui, temporibus consectetuer voluptatum, porttitor, beatae delenit.
  </div>
</div>

</div>

{/* third container  */}

     <div className=' d-flex flex-wrap flex-lg-nowrap flex-md-nowrap justify-content-between  '>
       <div className='d-flex flex-column align-items-end service-sub-content-2 col-md-4 pb-5 rounded'>
<p className=' pb-5 px-5 pt-5 text-secondary '>Who We Are</p>
<div className='about-con-sub-tite col-lg-6 col-md-6 col-sm-12 '></div>
<h2 className='py-3 px-3 text-md-end  mb-5'>About Our Organization</h2>
       </div>
       <div className='row mx-2 py-5 my-5'>
        <div className='col-md-4'>
           <h2 style={{ color:"rgb(83, 26, 144)"}}>Our Vision</h2>
           <p className='text-secondary'>Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora porro ame.</p>
        </div>


       <div className='col-md-4'>
        <h2 style={{ color:"rgb(83, 26, 144)"}}>Our Mission</h2>
        <p className='text-secondary'>Lorem luctus ipsum dolor sit amet, elit. Ut elit tellus, luctus nec ullam corper mattis, leo pulvinar dapibus dolor luctus.​</p>
       </div>
       <div className='col-md-4'>
        <h2 style={{ color:"rgb(83, 26, 144)"}}>Our Values</h2>
        <p className='text-secondary'>Neque porro quisquam est, quiipsum quia dolor sit amet, consectetur adipisci numquam eius modi tempora incidunt.</p>
        </div></div> 
     </div>

       {/* fourth container  */}

       <div className='container mt-5 founder'>
  <div className='founder-con'>
    <h1 className='text-center p-5' style={{ color: "rgb(83, 26, 144)" }}>Board Of Directors</h1>

    <div className="row mt-4 pt-5">
      {/* Director 1 */}
      <div className=' col-lg-4 col-md-6 col-sm-12 mb-4'>
        <div className='mt-3'>
          <div className='image-div col-md-9 col-sm-10'>
            <img src="../public/assets/img/founder1.jpg" alt="Amanda Lee" />
          </div>
          <h2 className='text-center pt-2' style={{ color: "rgb(83, 26, 144)" }}>Amanda Lee</h2>
          <p className='text-secondary text-center'>Founder / Director</p>
        </div>
        <p className='text-center text-secondary'>
          Neque porro quisquam est, qui ipsum quia dolor sit amet, consec tetur numquam eius modi tempora incidunt lores ta porro
        </p>
        <div className='text-center'>
          <a href="#"><TiSocialFacebook className='text-secondary m-2' /></a>
          <a href="#"><FaXTwitter className='text-secondary m-2' /></a>
          <a href="#"><FaLinkedinIn className='text-secondary m-2' /></a>
        </div>
      </div>

      {/* Director 2 */}
      <div className='carrd col-lg-4 col-md-6 col-sm-12 mb-4'>
        <div>
          <div className='image-div mt-4 mt-sm-3 pt-5 col-md-9 col-sm-10'>
            <img src="../public/assets/img/founder2.jpg" alt="Adam Cheise" />
          </div>
          <h2 className='text-center pt-2' style={{ color: "rgb(83, 26, 144)" }}>Adam Cheise</h2>
          <p className='text-secondary text-center'>Executive Director</p>
        </div>
        <p className='text-center text-secondary'>
          Neque porro quisquam est, qui ipsum quia dolor sit amet, consec tetur numquam eius modi tempora incidunt lores ta porro
        </p>
        <div className='text-center'>
          <a href="#"><TiSocialFacebook className='text-secondary m-2' /></a>
          <a href="#"><FaXTwitter className='text-secondary m-2' /></a>
          <a href="#"><FaLinkedinIn className='text-secondary m-2' /></a>
        </div>
      </div>

      {/* Director 3 */}
      <div className='col-lg-4 carrd col-md-6 col-sm-12 mb-4'>
        <div>
          <div className='image-div last-img pt-5  col-md-9 col-sm-10'>
            <img src="../public/assets/img/founder3.avif" alt="Mila Stuart" />
          </div>
          <h2 className='text-center pt-2' style={{ color: "rgb(83, 26, 144)" }}>Mila Stuart</h2>
          <p className='text-secondary text-center'>Finance Director</p>
        </div>
        <p className='text-center text-secondary'>
          Neque porro quisquam est, qui ipsum quia dolor sit amet, consec tetur numquam eius modi tempora incidunt lores ta porro
        </p>
        <div className='text-center'>
          <a href="#"><TiSocialFacebook className='text-secondary m-2' /></a>
          <a href="#"><FaXTwitter className='text-secondary m-2' /></a>
          <a href="#"><FaLinkedinIn className='text-secondary m-2' /></a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* fifth cintainer  */}


 <div className='container mt-5  pt-5'>
  <h1 className='text-center my-5 my-sm-3 py-3' style={{ color: "rgb(83, 26, 144)" }}>Our Team</h1>
         <div className='row'>
            <div className="col-md-4 my-4">
              <p style={{ color: "rgb(83, 26, 144)" }}>Director</p>
              <h2 style={{ color: "rgb(83, 26, 144)" }}>Jessica Pearson</h2>
              <p className='text-secondary'>Neque porro quisquam est, quiipsum quia dolor sit amet, consec tetur numquam eius modi tempora incidunt lores ta porr
              </p>
              <div className=''>
          <a href="#"><TiSocialFacebook className='text-secondary m-2' /></a>
          <a href="#"><FaXTwitter className='text-secondary m-2' /></a>
          <a href="#"><FaLinkedinIn className='text-secondary m-2' /></a>
        </div>
            </div>
            <div className="col-md-4 my-4">
            <p style={{ color: "rgb(83, 26, 144)" }}>Director</p>
              <h2 style={{ color: "rgb(83, 26, 144)" }}>Harvey Spector</h2>
              <p className='text-secondary'>Neque porro quisquam est, quiipsum quia dolor sit amet, consec tetur numquam eius modi tempora incidunt lores ta porr
              </p>
              <div className=''>
          <a href="#"><TiSocialFacebook className='text-secondary m-2' /></a>
          <a href="#"><FaXTwitter className='text-secondary m-2' /></a>
          <a href="#"><FaLinkedinIn className='text-secondary m-2' /></a>
        </div>
            </div>
            <div className="col-md-4 my-4">
            <p style={{ color: "rgb(83, 26, 144)" }}>Additional Director</p>
              <h2 style={{ color: "rgb(83, 26, 144)" }}>Mike Ross</h2>
              <p className='text-secondary'>Neque porro quisquam est, quiipsum quia dolor sit amet, consec tetur numquam eius modi tempora incidunt lores ta porr
              </p>
              <div className=''>
          <a href="#"><TiSocialFacebook className='text-secondary m-2' /></a>
          <a href="#"><FaXTwitter className='text-secondary m-2' /></a>
          <a href="#"><FaLinkedinIn className='text-secondary m-2' /></a>
        </div>
            </div>
            <div className="col-md-4 my-4">
            <p style={{ color: "rgb(83, 26, 144)" }}>Manager - Operations</p>
              <h2 style={{ color: "rgb(83, 26, 144)" }}>Floyd Staller</h2>
              <p className='text-secondary'>Neque porro quisquam est, quiipsum quia dolor sit amet, consec tetur numquam eius modi tempora incidunt lores ta porr
              </p>
              <div className=''>
          <a href="#"><TiSocialFacebook className='text-secondary m-2' /></a>
          <a href="#"><FaXTwitter className='text-secondary m-2' /></a>
          <a href="#"><FaLinkedinIn className='text-secondary m-2' /></a>
        </div>
            </div>
            <div className="col-md-4 my-4">
            <p style={{ color: "rgb(83, 26, 144)" }}>Manager - Marketing</p>
              <h2 style={{ color: "rgb(83, 26, 144)" }}>Donald Milson</h2>
              <p className='text-secondary'>Neque porro quisquam est, quiipsum quia dolor sit amet, consec tetur numquam eius modi tempora incidunt lores ta porr
              </p>
              <div className=''>
          <a href="#"><TiSocialFacebook className='text-secondary m-2' /></a>
          <a href="#"><FaXTwitter className='text-secondary m-2' /></a>
          <a href="#"><FaLinkedinIn className='text-secondary m-2' /></a>
        </div>
            </div>
            <div className="col-md-4 my-4">
            <p style={{ color: "rgb(83, 26, 144)" }}>Manager - Human Resource</p>
              <h2 style={{ color: "rgb(83, 26, 144)" }}>Mishel Fox</h2>
              <p className='text-secondary'>Neque porro quisquam est, quiipsum quia dolor sit amet, consec tetur numquam eius modi tempora incidunt lores ta porr
              </p>
              <div className=''>
          <a href="#"><TiSocialFacebook className='text-secondary m-2' /></a>
          <a href="#"><FaXTwitter className='text-secondary m-2' /></a>
          <a href="#"><FaLinkedinIn className='text-secondary m-2' /></a>
        </div>
            </div>
         </div>
 </div>
       <Count/>
     </div>
    </>
  )
}

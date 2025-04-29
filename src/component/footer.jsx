import React from 'react'
import "./Footer.css";

export default function footer() {
  return (
    <>
       <div className="footer-first mt-5">
        <div className="sub-cont">
          <ul>
          <p>service</p>
            <li><a href="#">Finance Management</a> </li>
            <li><a href="#">Tax Planning</a> </li>
            <li><a href="#">Tax Preparation</a> </li>
            <li><a href="#">Business Advice</a> </li>
            <li><a href="#">Payroll Management</a> </li>
          </ul>
        </div>
        <div className="sub-cont">
        <ul>
          <p>industries</p>
            <li><a href="#">Aerospace</a> </li>
            <li><a href="#">Healthcare</a> </li>
            <li><a href="#">Agriculture</a> </li>
            <li><a href="#">Manifacturing</a> </li>
            <li><a href="#">Automotive</a> </li>
          </ul>
        </div>
        <div className="sub-cont">
        <ul>
          <p>about</p>
            <li><a href="#">Company Profile</a> </li>
            <li><a href="#">Vision. Mission.</a> </li>
            <li><a href="#">Board of Directors</a> </li>
            <li><a href="#">Careers</a> </li>
            <li><a href="#">Numbers Speak</a> </li>
          </ul>
        </div>
        <div className="sub-cont">
        <ul>
          <p>follow us</p>
            <li>Quos mollis incididunt culpa officia</li>
            <li>dignissimos necessitatib</li>
            <li></li>
            
          </ul>
        </div>
        </div>
        <div className='footer-sec row p-5 text-center'>
        <p className='col-md-6 col-sm-6 my-2'>Copyright © 2025 Financial Advisors</p>
        <p className='col-md-6 col-sm-6 my-2'>Powered by Financial Advisors</p>
        </div>
    </>
  )
}

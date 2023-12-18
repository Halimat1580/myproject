import React from "react";
import { FaFolderClosed } from "react-icons/fa6";
import { FaLock,  FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsQuestionSquareFill, BsQuestionSquare } from "react-icons/bs";
import { Link } from 'react-router-dom'
import AppleLogo from "../assets/apple.svg";
import PlayStore from "../assets/playstore.svg";
import { RiFacebookFill } from "react-icons/ri";
import { LuDot } from "react-icons/lu";

const Footer = () => {
  return (
    <div>
    <div className="footer-container">
      <div className="specifications flex">
        <div className="flex about">
        <div className="support flex">
          <p className="question-mark">
            <span>
              <BsQuestionSquareFill className="over"/> <BsQuestionSquare className="below"/>
            </span>
          </p>
          <div>
            <p>24/7</p>
            <p>Support</p>
          </div>
        </div>
        <div className="secured flex">
          <p className="question-mark">
            <span className="footer-icons">
              <FaFolderClosed className="folder"/> <FaLock className="lock"/>
            </span>
          </p>
          <div>
            <p>100%</p>
            <p>Secured</p>
          </div>
        </div>
        </div>

        <div className="app-download flex">
          <div className="applestore flex">
            <img src={AppleLogo} alt="apple Logo" />
            <div>
              <p>Download on the</p>
              <span> APP STORE</span>
            </div>
          </div>
          <div className="playstore flex">
            <img src={PlayStore} alt="playstore Logo" />
            <div>
              <p>Get it on </p>
              <span> GOOGLE PLAY</span>
            </div>
          </div>
        </div>
      </div>

      <h3>Need Help</h3>

      <p><a href="#">+234 907 466 6655</a> or</p>
      <a href="#">help@jazzysburger.com</a>

      <h3>FOLLOW US</h3>
      <div className="flex social">
        
       
      

      <RiFacebookFill className="social-icon"/>
      <FaTwitter className="social-icon"/>
      <FaInstagram className="social-icon"/>
      <FaYoutube className="social-icon"/>
      </div>

      
    </div>
    <div className="credentials">
        <p>&copy; Limmy <LuDot /> Developed by our Digital  LLC

        </p>
      </div>
    </div>
  );
};

export default Footer;

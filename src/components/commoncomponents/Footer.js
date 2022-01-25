import React from "react";
import "react-multi-carousel/lib/styles.css";

const Footer = () => {
  return (
    <div className="footer bg-video py-5 text-center">
      <img className="footer--img" src="../images/punks-title-CW.webp" alt=""></img>
      <p className="font-20 mt-4 mb-2 text-ppink">JOIN THE CONVERSATION</p>
      <div>
        <a href="#"><img className="footer--icon" src="images/twitter.webp" alt="" /></a>
        <a href="#"><img className="footer--icon" src="images/discord.webp" alt="" /></a>
      </div>
      <div className="footer--links mx-auto mt-5">
        <a className="footer--link font-lg-16 font-md-14 font-sm-10 font-sans" href="#">PUNKS COMIC</a>
        <a className="footer--link font-lg-16 font-md-14 font-sm-10 font-sans" href="#">ISSUE #1</a>
        <a className="footer--link font-lg-16 font-md-14 font-sm-10 font-sans" href="#">MEET THE PUNKS</a>
        <a className="footer--link font-lg-16 font-md-14 font-sm-10 font-sans" href="#">METAHERO</a>
        <a className="footer--link font-lg-16 font-md-14 font-sm-10 font-sans" href="#">PUNKS COMIC</a>
        <a className="footer--link font-lg-16 font-md-14 font-sm-10 font-sans" href="#">ABOUT</a>
        <a className="footer--link font-lg-16 font-md-14 font-sm-10 font-sans" href="#">PRESS KIT</a>
      </div>
      <img className="footer--pximg mt-3" src="../images/PVWhiteLogo-512x512.png" alt=""></img>
      <p className="font-sans font-lg-16 font-md-14 font-sm-10 text-white mt-3">
        CONTACT US AT INFO@PUNKSCOMIC.COM | COPYRIGHT © 2021 ALL RIGHTS RESERVED
      </p>
    </div >
  );
};

export default Footer;
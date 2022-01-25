import React from "react";
import {
  Row,
  Col
} from "react-bootstrap";

const Video = () => {
  return (
    <div className="bg-video">
      <Row className="video mx-auto py-5">
        <Col lg={6} className="text-center px-5">
          <video className="video--mp4" autoPlay muted loop playsInline>
            <source src="../images/adidasLoop.mp4" type="video/mp4"></source>
          </video>
          <p className="font-20 text-white font-issue">
            SPECIAL PARTNERS:<br />
            ADIDAS, BAYC, GMONEY
          </p>
          <p className="font-14 text-white">
            PUNKS Comic teams up with Bored Ape Yacht Club and gmoney
            to lead adidas Originals into the Metaverse. Written by
            Josh Blaylock and illustrated by Chris Wahl, PUNKS Comic
            Issue #2 takes you on a wild adventure merging the
            Metaverse and the physical world in a way that has never
            been done before. More details coming soon. 👀
          </p>
        </Col>
        <Col lg={6} className="text-center px-5">
          <video className="video--mp4" autoPlay muted loop playsInline>
            <source src="../images/EliteApeLoop2.mp4" type="video/mp4"></source>
          </video>
          <p className="font-20 text-white font-issue">
            FIRST APPEARANCE:<br />
            ELITE APES
          </p>
          <p className="font-14 text-white">
            From hundreds of submissions to 64 contenders to be 
            narrowed down to the final few: Ape Madness contest 
            winners BBA, Biz, Hanzo, Kiki, King BlackBored, 
            Lone-Star, and Tropo make their first appearance in 
            PUNKS Comic as they team up with the PUNKS crew in 
            their quest for a treasure of unimaginable value.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Video;
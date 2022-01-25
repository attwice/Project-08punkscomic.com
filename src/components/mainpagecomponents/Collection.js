import React from "react";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";

const Community = () => {
  return (
    <div className="collection text-center pt-4 pb-4">
      <p className="text-ppink font-26 mb-3 font-issue mt-4">
        COMING SOON:<br />
        ELITE APE COLLECTORS' EDITIONS
      </p>
      <p className="collection--text text-white font-16 mx-auto mb-4">
        PUNKS Comic takes it one step further by partnering with your favorite
        Bored Apes to co-release Limited Editions of Issue #2, a first for IP
        licensing in the NFT space. Our team worked with each ape owner to
        create alternate-cover PUNKS Comic Issue #2 collections. These
        collectibles mark a significant milestone in bringing NFT communities
        together through collaborative storytelling and IP development. Holders
        of these editions will be able to claim the physical copy at a later date.
      </p>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={3} md={4} sm={6} className="text-center pt-4">
            <img className="collection--img" src="../images/P2FC-bba.jpeg" alt="#action1"></img>
            <p className="text-white font-26 font-issue mt-4">BBA</p>
            <a className="collection--link font-16" href="/#">APE #6743</a>
          </Col>
          <Col lg={3} md={4} sm={6} className="text-center pt-4">
            <img className="collection--img" src="../images/P2FC-biz.jpeg" alt="#action1"></img>
            <p className="text-white font-26 font-issue mt-4">BIZ</p>
            <a className="collection--link font-16" href="/#">APE #6743</a>
          </Col>
          <Col lg={3} md={4} sm={6} className="text-center pt-4">
            <img className="collection--img" src="../images/P2FC-hanzo.jpeg" alt="#action1"></img>
            <p className="text-white font-26 font-issue mt-4">HANZO</p>
            <a className="collection--link font-16" href="/#">APE #6743</a>
          </Col>
          <Col lg={3} md={4} sm={6} className="text-center pt-4">
            <img className="collection--img" src="../images/P2FC-kiki.jpeg" alt="#action1"></img>
            <p className="text-white font-26 font-issue mt-4">KIKI</p>
            <a className="collection--link font-16" href="/#">APE #6743</a>
          </Col>
          <Col lg={3} md={4} sm={6} className="text-center pt-4">
            <img className="collection--img" src="../images/P2FC-kbb.jpeg" alt="#action1"></img>
            <p className="text-white font-26 font-issue mt-4">KING BLACKBORED</p>
            <a className="collection--link font-16" href="/#">APE #6743</a>
          </Col>
          <Col lg={3} md={4} sm={6} className="text-center pt-4">
            <img className="collection--img" src="../images/P2FC-lonestar.jpeg" alt="#action1"></img>
            <p className="text-white font-26 font-issue mt-4">LONE-STAR</p>
            <a className="collection--link font-16" href="/#">APE #6743</a>
          </Col>
          <Col lg={3} md={4} sm={6} className="text-center pt-4">
            <img className="collection--img" src="../images/P2FC-tropo.jpeg" alt="#action1"></img>
            <p className="text-white font-26 font-issue mt-4">TROPO</p>
            <a className="collection--link font-16" href="/#">APE #6743</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Community;
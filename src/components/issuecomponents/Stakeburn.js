import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Stakeburn = () => {
  return (
    <div className="stake">
      <p className="text-white font-20 font-sans mb-5 text-center">
        WHAT YOU CAN DO WITH YOUR NFT
      </p>
      <Container className="pt-5 max1100">
        <Row className="d-flex justify-content-between">
          <Col md={6} sm={12} className=" mt-5 px-3 mb-100">
            <div className="px-5 bg-video">
              <div className="text-center">
                <img
                  className="stake--logoimg"
                  src="../images/BurnIt.webp"
                  alt=""
                ></img>
              </div>
              <p className="text-center font-20 font-sans text-ppink text-center">
                FOR A FOUNDER'S DAO NFT
              </p>
              <div className="stake--div py-3 text-white">
                <p className="font-20">FOUNDER’S DAO</p>
                <p className="font-16">
                  Founder’s DAO NFTs represent proportional ownership over the
                  Founder’s DAO.
                </p>
              </div>
              <div className="stake--div py-3 text-white">
                <p className="font-20">APPROX. CONTENT VALUE AT INCEPTION</p>
                <h1 className="amount white">600+ETH</h1>
              </div>
              <div className="stake--div py-3 text-white">
                <h6>
                  DAO NFT holders have governance over the DAO's contents
                  (fractionalization, item sales, buyouts, etc) + access to a
                  private Discord.
                </h6>
              </div>
              <div className="stake--div py-3 text-white">
                <h6>Burning window is now closed.</h6>
              </div>
            </div>
            <img
              className="width-full"
              src="../images/fullimg.webp"
              alt=""
            ></img>
          </Col>
          <Col md={6} sm={12} className=" mt-5 px-3 mb-100">
            <div className="px-5 bg-video">
              <div className="text-center">
                <img
                  className="stake--logoimg"
                  src="../images/StakeIt.webp"
                  alt=""
                ></img>
              </div>
              <p className="text-center font-20 font-sans text-ppink text-center">
                FOR 50% OF $PUNKS TOKENS
              </p>
              <div className="stake--div py-3 text-white">
                <p className="font-20">$PUNKS TOKENS</p>
                <p className="font-16">
                  $PUNKS represent fractional ownership of the 16 CryptoPunks
                  represented in the comic.
                </p>
              </div>
              <div className="stake--div py-3 text-white">
                <p className="font-20">APPROX. $PUNKS STAKING VALUE</p>
                <h1 className="amount white">600+ETH</h1>
              </div>
              <div className="stake--div py-3 text-white">
                <h6>
                  50,000,000 tokens (out of 100,000,000 in total) will be
                  distributed to those staking their PUNKS Comic NFT over a
                  24-month period.
                </h6>
              </div>
              <div className="stake--div py-3 text-white">
                <h6>Burning window is now closed.</h6>
              </div>
            </div>
            <img
              className="width-full"
              src="../images/fullimg.webp"
              alt=""
            ></img>
          </Col>
        </Row>
        <div className="text-center">
          <img className="" src="../images/line.webp" alt=""></img>
          <img className="warnimg" src="../images/Warning.webp" alt=""></img>
          <img className="" src="../images/line.webp" alt=""></img>
          <p className="font-24 text-center text-green p-3 mb-100">
            THE PURCHASE OF THE GENESIS PUNKS COMIC IS THE ONLY WAY TO
            PARTICIPATE IN EITHER OF THE OPPORTUNITIES ABOVE. NO FUTURE EDITIONS
            WILL BE STAKED FOR $PUNKS OR PROVIDE ACCESS TO THE FOUNDER’S DAO.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Stakeburn;

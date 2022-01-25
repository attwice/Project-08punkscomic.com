import React from "react";
import "react-multi-carousel/lib/styles.css";
import {
  Col,
  Row
} from "react-bootstrap";

const Ournft = () => {
  return (
    <div className="purchase mx-auto">
      <Row>
        <Col lg={5} className="text-center">
          <img className="purchase--img mt-3" src="../images/P2FCmain.jpeg" alt=""></img>
        </Col>
        <Col lg={7} className="text-center">
          <img className="purchase--commicimg mx-auto" src="../images/SpreadMockup_small.png" alt=""></img>
          <div className="purchase--pan text-white">
            <p className="mx-5">
              Meet the PUNKS! Everyone’s favorite misfit crew of collectors,
              rebels, and crypto degens from the Metaverse is back. This time they’re
              teaming up with friends from the Bored Ape Yacht Club and beyond
              on the ultimate treasure hunt!
            </p>
            <p className="mx-5 mb-5">
              Featuring NFT upstarts Courtney and the PUNKS crew, they must
              work alongside the Apes in a race against the nefarious Frank
              Lopez, to score the most legendary of swag. Featuring new ape
              on the scene, Indigo Herz, in their first adventure through
              the Metaverse.
            </p>
            <button className="purchase--btn font-20">PURCHASE THROUGH OPENSEA</button>
          </div>
          <p className="font-10 text-white mt-2">
            Your purchase of the PUNKS Comic does NOT CONSTITUTE AN INVESTMENT.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Ournft;
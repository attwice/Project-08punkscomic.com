import React from "react";


const Tokenomic = () => {
  return (
    <div className="project bg-video text-center">
      <img className="project--img mb-5" src="../images/logo_punk_clean_2 2.webp" alt=""></img>
      <p className="font-26 mt-4 mb-2 text-issue text-ppink">TOKENOMICS</p>
      <p className="font-sans font-16 text-white mt-5">WHAT YOU MINT</p>
      <img className="project--img" src="../images/arrow-down.svg" alt=""></img>
      <div></div>
      <img className="project--img mb-5" src="../images/OpenComic.webp" alt=""></img>
      <p className="project--txt font-20 font-sans text-ppink mx-auto mb-4">
        PUNKS COMIC, ISSUE #1 NFT
      </p>
      <div className="tokenpan text-center mx-auto mt-5 mb-5">
        <p className="bg-ppink text-white font-20 font-sans p-2 mt-3 mb-2">
          1 SERIALED PUNKS COMIC, ISSUE 1, ERC-721 TOKEN (10,000 MINTED)
        </p>
        <p className="bg-ppink text-white font-20 font-sans p-2 mt-3 mb-2">
          1 LIMITED EDITION PRINTED COMIC WITH FREE SHIPPING WORLDWIDE (10,000 PRINTED)*
        </p>
        <p className="text-ppink font-20 font-sans bg-white p-2 mt-3 mb-2">
          27 RANDOM MINTS TO RECEIVE PUNKS NFTS FROM HACKATAO, KILLER ACID, AND ROBBIE TREVINO**
        </p>
        <p className="text-ppink font-20 font-sans p-2 mt-3 mb-2">
          *Claiming of the printed comic will only be available to those who choose not to burn their NFT. Claiming window will be announced soon. Printed comic will include a premium protective case and a serialed certificate of authenticity.
          ** The 27 random mints were distributed during the original minting period. Owners may trade in the secondary market.
        </p>
        <p className="text-ppink font-26 font-sans p-2 mt-3 mb-2">ISSUE #1 TOKENOMICS TIMELINE</p>
        <img className="tokenpan--status mt-5" src="../images/PunksTimeline2.webp" alt=""></img>
      </div>
    </div>
  );
};

export default Tokenomic;
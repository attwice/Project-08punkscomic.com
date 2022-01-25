import React from "react";


const Project = () => {
  return (
    <div className="project text-center">
      <img className="project--img" src="../images/punks-title-CW.webp" alt=""></img>
      <p className="font-14 mt-4 mb-2 text-white">A PROJECT BY</p>
      <img className="project--pximg mt-4 mb-3" src="../images/PVWhiteLogo-512x512.png" alt=""></img>
      <p className="font-issue font-26 text-ppink">PUNKS COMIC, ISSUE #2</p>
      <p className="font-issue font-26 text-white mb-3">"X MARKS THE DROP"</p>
      <p className="project--txt font-18 font-sans text-ppink mx-auto mb-4">
        THE PHYSICAL AND META-WORLDS COLLIDE AS PUNKS
        AND APES RACE AGAINST TIME FOR THE ULTIMATE PRIZE
      </p>
      <div className="project--connect mx-auto text-center py-4 mb-4">
        <p className="font-16 text-sans">ORIGINAL MINTERS OF ISSUE #1:</p>
        <button className="project--connect--btn text-center font-issue my-3">CONNECT</button>
        <p className="font-14 my-3">3 DAYS, 18 HRS LEFT TO CLAIM</p>
        <p>ORIGINAL MINTERS OF TOKEN IDS 1-5,000 ONLY</p>
      </div>
      <p className="project--release text-white font-20 mx-auto mb-1">
        RELEASE 1: 10,000 MAIN EDITIONS 💥 SOLD OUT 💥
      </p>
      <p className="project--release text-white font-20 mx-auto mb-1">
        RELEASE 2: CLAIM OF 5,000 MAIN EDITIONS FREE FOR ISSUE #1 MINTERS* 💥 OPEN NOW 💥
      </p>
      <p className="project--release text-white font-20 mx-auto mb-1">
        RELEASE 3: 6,000 ELITE APE COLLECTORS' EDITIONS
      </p>
      <p className="project--release text-white font-20 mx-auto mb-1">
        RELEASE 4: CLAIM YOUR PHYSICAL COMICS
      </p>
      <p className="font-10 text-white">*AS PROMISED FOR ORIGINAL MINTERS OF ISSUE #1 TOKEN IDS 1-5,000</p>
    </div>
  );
};

export default Project;
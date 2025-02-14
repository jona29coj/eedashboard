import React from "react";
import vid from "../videos/sunpathvideo.mp4"; 

const Spa = () => {
  return (
    <div className="border-gray-300 shadow-lg rounded-lg p-4 bg-white">
      <h1 className="text-2xl font-bold text-center pb-4">Sun Path Analysis</h1>
      <video className="w-full rounded-md" autoPlay muted loop>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Spa;
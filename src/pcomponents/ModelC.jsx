import React from "react";
import model from "../videos/model.mp4";

const Model = () => {
  return (
    <div className="border-gray-300 shadow-lg rounded-lg p-4 bg-white">
      <h1 className="text-2xl font-bold text-center pb-4">Building Overview</h1>
      <video className="w-full rounded-md" autoPlay muted loop>
        <source src={model} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Model;
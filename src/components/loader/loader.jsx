import React from "react";
import { loader } from "../../assets/video/video";

const Loader = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="w-full h-[100vh] object-cover"
    >
      <source src={loader} type="video/mp4" />
    </video>
  );
};

export default Loader;

import React from "react";
import Lottie from "react-lottie";
import animationData from "./Loading.json";

const Fallback = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{position:"absolute", top: '50%', left:'50%', transform: "translate(-50%,-50%)"}}>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default Fallback;

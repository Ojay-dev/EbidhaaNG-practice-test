import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const ForwardIconComponent = () => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle opacity="0.7" cx="10" cy="10" r="10" fill="#5935D5" />
    <Path
      d="M8 6L12 10L8 14"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default ForwardIconComponent;

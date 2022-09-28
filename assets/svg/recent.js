import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
   <Circle cx="20" cy="20" r="20" fill="#F8F8F8"/>
<Path d="M28.3334 20C28.3334 24.6 24.6001 28.3333 20.0001 28.3333C15.4001 28.3333 11.6667 24.6 11.6667 20C11.6667 15.4 15.4001 11.6667 20.0001 11.6667C24.6001 11.6667 28.3334 15.4 28.3334 20Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path opacity="0.4" d="M23.0917 22.65L20.5083 21.1083C20.0583 20.8417 19.6917 20.2 19.6917 19.675V16.2583" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>
  );

export default SVGComponent;

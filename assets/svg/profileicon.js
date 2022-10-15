import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
    width={80}
    height={80}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
<Circle cx="40" cy="40" r="40" fill="#F8F8F8"/>
<Path d="M39.9994 40C44.6017 40 48.3327 36.2691 48.3327 31.6667C48.3327 27.0643 44.6017 23.3333 39.9994 23.3333C35.397 23.3333 31.666 27.0643 31.666 31.6667C31.666 36.2691 35.397 40 39.9994 40Z" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path opacity="0.4" d="M54.3169 56.6667C54.3169 50.2167 47.9003 45 40.0003 45C32.1003 45 25.6836 50.2167 25.6836 56.6667" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>

  );

export default SVGComponent;

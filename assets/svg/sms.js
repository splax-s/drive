import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
<Path d="M14.166 17.0833H5.83268C3.33268 17.0833 1.66602 15.8333 1.66602 12.9167V7.08333C1.66602 4.16666 3.33268 2.91666 5.83268 2.91666H14.166C16.666 2.91666 18.3327 4.16666 18.3327 7.08333V12.9167C18.3327 15.8333 16.666 17.0833 14.166 17.0833Z" stroke="#121212" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<Path opacity="0.4" d="M14.1673 7.5L11.559 9.58333C10.7006 10.2667 9.29231 10.2667 8.43398 9.58333L5.83398 7.5" stroke="#121212" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>

  );

export default SVGComponent;

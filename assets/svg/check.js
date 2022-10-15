import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
<Path fill-rule="evenodd" clip-rule="evenodd" d="M4.66659 9.98666L1.39992 6.06666L0.311035 7.37332L4.66659 12.6L13.9999 1.39999L12.911 0.0933228L4.66659 9.98666Z" fill="#757575"/>
  </Svg>

  );

export default SVGComponent;

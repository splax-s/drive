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
  <Path d="M7.00016 7.00001C8.61099 7.00001 9.91683 5.69417 9.91683 4.08334C9.91683 2.47251 8.61099 1.16667 7.00016 1.16667C5.38933 1.16667 4.0835 2.47251 4.0835 4.08334C4.0835 5.69417 5.38933 7.00001 7.00016 7.00001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path opacity="0.4" d="M12.0109 12.8333C12.0109 10.5758 9.76509 8.75 7.00009 8.75C4.23509 8.75 1.98926 10.5758 1.98926 12.8333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>

  );

export default SVGComponent;

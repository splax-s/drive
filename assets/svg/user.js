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
    <Path d="M10 10C12.3012 10 14.1667 8.13452 14.1667 5.83334C14.1667 3.53215 12.3012 1.66667 10 1.66667C7.69882 1.66667 5.83334 3.53215 5.83334 5.83334C5.83334 8.13452 7.69882 10 10 10Z" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05001 12.5 2.84167 15.1083 2.84167 18.3333" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

);

export default SVGComponent;

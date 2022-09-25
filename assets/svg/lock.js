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
<Path d="M5 8.33333V6.66667C5 3.90833 5.83333 1.66667 10 1.66667C14.1667 1.66667 15 3.90833 15 6.66667V8.33333" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M9.99999 15.4167C11.1506 15.4167 12.0833 14.4839 12.0833 13.3333C12.0833 12.1827 11.1506 11.25 9.99999 11.25C8.8494 11.25 7.91666 12.1827 7.91666 13.3333C7.91666 14.4839 8.8494 15.4167 9.99999 15.4167Z" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M14.1667 18.3333H5.83332C2.49999 18.3333 1.66666 17.5 1.66666 14.1667V12.5C1.66666 9.16667 2.49999 8.33333 5.83332 8.33333H14.1667C17.5 8.33333 18.3333 9.16667 18.3333 12.5V14.1667C18.3333 17.5 17.5 18.3333 14.1667 18.3333Z" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>

  );

export default SVGComponent;

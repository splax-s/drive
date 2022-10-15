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
<Path d="M15 15.7167H14.3667C13.7 15.7167 13.0667 15.975 12.6 16.4416L11.175 17.85C10.525 18.4917 9.46667 18.4917 8.81667 17.85L7.39166 16.4416C6.925 15.975 6.28333 15.7167 5.625 15.7167H5C3.61667 15.7167 2.5 14.6083 2.5 13.2417V4.14998C2.5 2.78331 3.61667 1.675 5 1.675H15C16.3833 1.675 17.5 2.78331 17.5 4.14998V13.2417C17.5 14.6 16.3833 15.7167 15 15.7167Z" stroke="#121212" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<Path opacity="0.4" d="M5.83398 7.63336C5.83398 6.85836 6.46732 6.22498 7.24232 6.22498C8.01732 6.22498 8.65066 6.85836 8.65066 7.63336C8.65066 9.20003 6.42565 9.36669 5.93398 10.8584C5.83398 11.1667 6.09232 11.475 6.41732 11.475H8.65066" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path opacity="0.4" d="M13.3674 11.4667V6.70836C13.3674 6.4917 13.2258 6.29998 13.0174 6.24165C12.8091 6.18331 12.5841 6.26665 12.4675 6.44998C11.8675 7.41665 11.2174 8.51666 10.6508 9.48333C10.5591 9.64166 10.5591 9.85 10.6508 10.0083C10.7424 10.1667 10.9175 10.2666 11.1091 10.2666H14.1674" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>

  );

export default SVGComponent;

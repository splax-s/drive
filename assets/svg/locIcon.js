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
<Path opacity="0.4" d="M9.9999 11.1917C11.4358 11.1917 12.5999 10.0276 12.5999 8.59167C12.5999 7.15573 11.4358 5.99167 9.9999 5.99167C8.56396 5.99167 7.3999 7.15573 7.3999 8.59167C7.3999 10.0276 8.56396 11.1917 9.9999 11.1917Z" stroke="#757575" stroke-width="1.5"/>
<Path d="M3.01675 7.075C4.65842 -0.141667 15.3501 -0.133334 16.9834 7.08333C17.9418 11.3167 15.3084 14.9 13.0001 17.1167C11.3251 18.7333 8.67508 18.7333 6.99175 17.1167C4.69175 14.9 2.05842 11.3083 3.01675 7.075Z" stroke="#757575" stroke-width="1.5"/>
  </Svg>

  );

export default SVGComponent;

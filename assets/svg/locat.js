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
<Path opacity="0.4" d="M20 21.1917C21.436 21.1917 22.6 20.0276 22.6 18.5917C22.6 17.1557 21.436 15.9917 20 15.9917C18.5641 15.9917 17.4 17.1557 17.4 18.5917C17.4 20.0276 18.5641 21.1917 20 21.1917Z" stroke="#757575" stroke-width="1.5"/>
<Path d="M13.0166 17.075C14.6583 9.85834 25.35 9.86667 26.9833 17.0833C27.9416 21.3167 25.3083 24.9 23 27.1167C21.325 28.7333 18.675 28.7333 16.9916 27.1167C14.6916 24.9 12.0583 21.3083 13.0166 17.075Z" stroke="#757575" stroke-width="1.5"/>
  </Svg>
  );

export default SVGComponent;

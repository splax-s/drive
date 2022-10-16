import * as React from "react";
import Svg, { Path, Circle, G,  } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M19.2901 9.17L7.70015 3.07C4.95015 1.62 1.96015 4.55 3.35015 7.33L4.97015 10.57C5.42015 11.47 5.42015 12.53 4.97015 13.43L3.35015 16.67C1.96015 19.45 4.95015 22.37 7.70015 20.93L19.2901 14.83C21.5701 13.63 21.5701 10.37 19.2901 9.17Z" stroke="#4949FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>
  );

export default SVGComponent;

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
<Path d="M2.7043 5.05039L2.75352 5.10781L6.47227 9.38711C6.59805 9.53203 6.78672 9.62226 6.99727 9.62226C7.20781 9.62226 7.39648 9.5293 7.52227 9.38711L11.2383 5.11602L11.3012 5.04492C11.3477 4.97656 11.375 4.89453 11.375 4.80703C11.375 4.56914 11.1727 4.375 10.9211 4.375H3.07891C2.82734 4.375 2.625 4.56914 2.625 4.80703C2.625 4.89726 2.65508 4.98203 2.7043 5.05039Z" fill="black"/>
  </Svg>
    );

    export default SVGComponent;

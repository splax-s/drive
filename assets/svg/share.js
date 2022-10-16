import * as React from "react";
import Svg, { Path, Circle, G, Defs, Filter, FeFlood, FeOffset, FeGaussianBlur, FeComposite, FeColorMatrix , FeBlend } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
<Path d="M12.3304 6.675C15.0304 6.9075 16.1329 8.295 16.1329 11.3325V11.43C16.1329 14.7825 14.7904 16.125 11.4379 16.125H6.55535C3.20285 16.125 1.86035 14.7825 1.86035 11.43V11.3325C1.86035 8.3175 2.94785 6.93 5.60285 6.6825" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<G opacity="0.4">
<Path d="M9 11.2501V2.71509" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M11.5133 4.3875L9.00078 1.875L6.48828 4.3875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</G>
  </Svg>
  );

export default SVGComponent;

import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
<Path d="M7.41602 6.3C7.67435 3.3 9.21602 2.075 12.591 2.075H12.6993C16.4243 2.075 17.916 3.56667 17.916 7.29167V12.725C17.916 16.45 16.4243 17.9417 12.6993 17.9417H12.591C9.24102 17.9417 7.69935 16.7333 7.42435 13.7833" stroke="#FF3737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<G opacity="0.4">
<Path d="M12.499 10H3.01562" stroke="#FF3737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M4.87565 7.20866L2.08398 10.0003L4.87565 12.792" stroke="#FF3737" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</G>
  </Svg>

  );

export default SVGComponent;

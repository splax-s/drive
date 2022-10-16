import * as React from "react";
import Svg, { Path, Circle, G,  } from "react-native-svg";

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
<Path opacity="0.4" d="M28.3337 15.2083V19.4583C28.3337 20.5167 27.9837 21.4083 27.3587 22.025C26.742 22.65 25.8503 23 24.792 23V24.5083C24.792 25.075 24.1587 25.4167 23.692 25.1L22.8837 24.5667C22.9587 24.3083 22.992 24.025 22.992 23.725V20.3334C22.992 18.6334 21.8587 17.5 20.1587 17.5H14.5003C14.3837 17.5 14.2753 17.5084 14.167 17.5167V15.2083C14.167 13.0833 15.5837 11.6667 17.7087 11.6667H24.792C26.917 11.6667 28.3337 13.0833 28.3337 15.2083Z" stroke="#757575" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M22.992 20.3334V23.725C22.992 24.025 22.9587 24.3083 22.8837 24.5667C22.5753 25.7917 21.5587 26.5583 20.1587 26.5583H17.892L15.3753 28.2333C15.0003 28.4917 14.5003 28.2167 14.5003 27.7667V26.5583C13.6503 26.5583 12.942 26.275 12.4503 25.7833C11.9503 25.2833 11.667 24.575 11.667 23.725V20.3334C11.667 18.75 12.6503 17.6583 14.167 17.5167C14.2753 17.5083 14.3837 17.5 14.5003 17.5H20.1587C21.8587 17.5 22.992 18.6334 22.992 20.3334Z" stroke="#757575" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>
  );

export default SVGComponent;

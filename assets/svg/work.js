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
<Circle cx="20" cy="20" r="20" fill="#4949FF"/>
<Path d="M16.6667 28.3333H23.3334C26.6834 28.3333 27.2834 26.9917 27.4584 25.3583L28.0834 18.6917C28.3084 16.6583 27.7251 15 24.1667 15H15.8334C12.2751 15 11.6917 16.6583 11.9167 18.6917L12.5417 25.3583C12.7167 26.9917 13.3167 28.3333 16.6667 28.3333Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<Path opacity="0.4" d="M16.6666 15V14.3333C16.6666 12.8583 16.6666 11.6667 19.3333 11.6667H20.6666C23.3333 11.6667 23.3333 12.8583 23.3333 14.3333V15" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<G opacity="0.4">
<Path d="M21.6667 20.8333V21.6667C21.6667 21.675 21.6667 21.675 21.6667 21.6833C21.6667 22.5917 21.6584 23.3333 20 23.3333C18.35 23.3333 18.3334 22.6 18.3334 21.6917V20.8333C18.3334 20 18.3334 20 19.1667 20H20.8334C21.6667 20 21.6667 20 21.6667 20.8333Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M28.0416 19.1667C26.1166 20.5667 23.9166 21.4 21.6666 21.6833" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M12.1826 19.3913C14.0576 20.6746 16.1743 21.4496 18.3326 21.6913" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</G>
  </Svg>
  );

export default SVGComponent;

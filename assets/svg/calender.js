import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
<Path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="#757575"/>
<Path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="#757575"/>
<Path d="M8.5 14.5C8.37 14.5 8.24 14.48 8.12 14.42C8 14.37 7.88999 14.3 7.78999 14.21C7.60999 14.02 7.5 13.76 7.5 13.5C7.5 13.37 7.53 13.24 7.58 13.12C7.63 13 7.69999 12.89 7.78999 12.79C7.88999 12.7 8 12.63 8.12 12.58C8.48 12.43 8.93001 12.51 9.21001 12.79C9.30001 12.89 9.37 13 9.42 13.12C9.47 13.24 9.5 13.37 9.5 13.5C9.5 13.76 9.39001 14.02 9.21001 14.21C9.02001 14.39 8.76 14.5 8.5 14.5Z" fill="#757575"/>
<Path d="M12 14.5C11.74 14.5 11.48 14.39 11.29 14.21C11.2 14.11 11.13 14 11.08 13.88C11.03 13.76 11 13.63 11 13.5C11 13.24 11.11 12.98 11.29 12.79C11.57 12.51 12.01 12.42 12.38 12.58C12.5 12.63 12.61 12.7 12.71 12.79C12.89 12.98 13 13.24 13 13.5C13 13.63 12.98 13.76 12.92 13.88C12.87 14 12.8 14.11 12.71 14.21C12.61 14.3 12.5 14.37 12.38 14.42C12.26 14.48 12.13 14.5 12 14.5Z" fill="#757575"/>
<Path d="M8.5 18C8.37 18 8.24 17.97 8.12 17.92C8 17.87 7.88999 17.8 7.78999 17.71C7.60999 17.52 7.5 17.27 7.5 17C7.5 16.87 7.53 16.74 7.58 16.62C7.63 16.49 7.69999 16.39 7.78999 16.29C7.88999 16.2 8 16.13 8.12 16.08C8.48 15.92 8.93001 16.01 9.21001 16.29C9.30001 16.39 9.37 16.49 9.42 16.62C9.47 16.74 9.5 16.87 9.5 17C9.5 17.27 9.39001 17.52 9.21001 17.71C9.02001 17.89 8.76 18 8.5 18Z" fill="#757575"/>
<Path d="M20.5 9.83997H3.5C3.09 9.83997 2.75 9.49997 2.75 9.08997C2.75 8.67997 3.09 8.33997 3.5 8.33997H20.5C20.91 8.33997 21.25 8.67997 21.25 9.08997C21.25 9.49997 20.91 9.83997 20.5 9.83997Z" fill="#757575"/>
<Path d="M18 23.75C15.38 23.75 13.25 21.62 13.25 19C13.25 16.38 15.38 14.25 18 14.25C20.62 14.25 22.75 16.38 22.75 19C22.75 21.62 20.62 23.75 18 23.75ZM18 15.75C16.21 15.75 14.75 17.21 14.75 19C14.75 20.79 16.21 22.25 18 22.25C19.79 22.25 21.25 20.79 21.25 19C21.25 17.21 19.79 15.75 18 15.75Z" fill="#757575"/>
<Path d="M19.49 19.7999H16.5C16.09 19.7999 15.75 19.4599 15.75 19.0499C15.75 18.6399 16.09 18.2999 16.5 18.2999H19.49C19.9 18.2999 20.24 18.6399 20.24 19.0499C20.24 19.4599 19.91 19.7999 19.49 19.7999Z" fill="#757575"/>
<Path d="M18 21.33C17.59 21.33 17.25 20.99 17.25 20.58V17.59C17.25 17.18 17.59 16.84 18 16.84C18.41 16.84 18.75 17.18 18.75 17.59V20.58C18.75 20.99 18.41 21.33 18 21.33Z" fill="#757575"/>
<Path d="M15.37 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V16.36C21.75 16.67 21.56 16.95 21.26 17.06C20.97 17.17 20.64 17.09 20.43 16.85C19.81 16.15 18.92 15.75 17.99 15.75C16.2 15.75 14.74 17.21 14.74 19C14.74 19.59 14.9 20.17 15.21 20.67C15.38 20.97 15.6 21.22 15.84 21.43C16.08 21.63 16.17 21.96 16.06 22.26C15.97 22.55 15.69 22.75 15.37 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H13.82C13.45 20.57 13.25 19.8 13.25 19C13.25 16.38 15.38 14.25 18 14.25C18.79 14.25 19.57 14.45 20.25 14.82V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" fill="#757575"/>
  </Svg>
    );

    export default SVGComponent;
import React from "react";
import Svg, { Path } from 'react-native-svg';

const ShieldIcon = () => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
  >
    <Path fill="#1E1E1E" d="M.5 0h24v24H.5z" />
    <Path
      fill="#fff"
      d="M12.5 22q-3.476-.875-5.738-3.988T4.5 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.913T12.5 22m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3"
    />
  </Svg>
);

export default ShieldIcon;
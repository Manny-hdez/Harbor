import React from "react";
import Svg, { Path } from 'react-native-svg';

const ChevronRight = () => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
  >
    <Path
      fill="#fff"
      d="m21 20-6.5-6.5q-.458-.458-.458-1.167 0-.707.458-1.166t1.167-.459q.708 0 1.166.459l7.667 7.666q.25.25.355.542t.103.625q0 .333-.103.625a1.4 1.4 0 0 1-.355.542l-7.667 7.666q-.458.459-1.166.459-.709 0-1.167-.459-.458-.458-.458-1.166 0-.709.458-1.167z"
    />
  </Svg>
);

export default ChevronRight;
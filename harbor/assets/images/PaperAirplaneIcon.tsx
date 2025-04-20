import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperAirplaneIcon = ({ width = 20, height = 20 }: { width?: number; height?: number }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 20"
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.667"
      d="m17.5 2.5-5.417 15a.459.459 0 0 1-.833 0l-2.917-5.833L2.5 8.75a.458.458 0 0 1 0-.833z"
    />
  </Svg>
);

export default PaperAirplaneIcon;
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SosIcon = ({ width = 16, height = 17 }: { width?: number; height?: number }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 16 17"
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.333"
      d="M8 5.833v2m0 2v.007m4-6.673a2 2 0 0 1 2 2V10.5a2 2 0 0 1-2 2H8.667l-3.334 2v-2H4a2 2 0 0 1-2-2V5.167a2 2 0 0 1 2-2z"
    />
  </Svg>
);

export default SosIcon;
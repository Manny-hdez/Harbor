import React from 'react';
import Svg, { Path } from 'react-native-svg';

const EyeIcon = ({ width = 32, height = 32 }: { width?: number; height?: number }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 32 32"
  >
    <Path
      fill="#fff"
      d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0m0 8c-.82 0-1.613.123-2.357.352a4 4 0 1 1-5.29 5.291A8 8 0 1 0 16 8"
    />
  </Svg>
);

export default EyeIcon;
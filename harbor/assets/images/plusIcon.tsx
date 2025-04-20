import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlusIcon = ({ width = 16, height = 17 }: { width?: number; height?: number }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 16 17"
  >
    <Path
      fill="#070707"
      d="M7.333 9.167H4a.64.64 0 0 1-.475-.192.65.65 0 0 1-.192-.475q0-.283.192-.475A.65.65 0 0 1 4 7.833h3.333V4.5q0-.283.192-.475A.65.65 0 0 1 8 3.833q.283 0 .475.192a.64.64 0 0 1 .192.475v3.333H12q.283 0 .475.192a.64.64 0 0 1 .192.475.65.65 0 0 1-.192.475.64.64 0 0 1-.475.192H8.667V12.5a.65.65 0 0 1-.192.475.64.64 0 0 1-.475.192.65.65 0 0 1-.475-.192.64.64 0 0 1-.192-.475z"
    />
  </Svg>
);

export default PlusIcon;
import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CommunityIconProps {
  width?: number; // Optional width prop
  height?: number; // Optional height prop
}

const CommunityIcon: React.FC<CommunityIconProps> = ({ width = 17, height = 17 }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 17 17"
  >
    <Path
      fill="#fff"
      d="M8.75 8.5a2.57 2.57 0 0 1-1.883-.783 2.57 2.57 0 0 1-.784-1.884q0-1.099.784-1.883a2.57 2.57 0 0 1 1.883-.783q1.1 0 1.883.783.784.783.784 1.883t-.784 1.884A2.57 2.57 0 0 1 8.75 8.5m-5.333 4v-.533q0-.567.292-1.042.292-.474.774-.725a10 10 0 0 1 2.1-.775 9.2 9.2 0 0 1 4.334 0 10 10 0 0 1 2.1.775q.483.25.775.725t.291 1.042v.533q0 .55-.39.942a1.28 1.28 0 0 1-.943.391h-8q-.55 0-.941-.391a1.29 1.29 0 0 1-.392-.942m1.333 0h8v-.533a.644.644 0 0 0-.333-.567q-.9-.45-1.817-.675a7.679 7.679 0 0 0-3.7 0 8.8 8.8 0 0 0-1.817.675.65.65 0 0 0-.333.567zm4-5.333q.55 0 .942-.392a1.28 1.28 0 0 0 .391-.942q0-.55-.39-.941A1.3 1.3 0 0 0 8.75 4.5q-.55 0-.941.392-.39.393-.392.941-.002.549.392.942.393.394.941.392"
    />
  </Svg>
);

export default CommunityIcon;
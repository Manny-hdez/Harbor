import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SosPointerProps {
  width?: number;
  height?: number; 
}

const SosPointer: React.FC<SosPointerProps> = ({ width = 24, height = 24 }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v3m0 3v.01M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"
    />
  </Svg>
);

export default SosPointer;
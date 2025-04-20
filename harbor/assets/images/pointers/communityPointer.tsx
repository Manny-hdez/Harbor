import React from 'react';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

interface CommunityPointerProps {
  width?: number; 
  height?: number; 
}

const CommunityPointer: React.FC<CommunityPointerProps> = ({ width = 67, height = 67 }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 67 67"
  >
    <Circle
      cx="33.5"
      cy="33.5"
      r="33.5"
      fill="url(#paint0_radial_9_182)"
      fillOpacity="0.5"
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_9_182"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(90 0 33.5) scale(33.5)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D32F2F" stopOpacity="0" />
        <Stop offset="1" stopColor="#D32F2F" />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default CommunityPointer;
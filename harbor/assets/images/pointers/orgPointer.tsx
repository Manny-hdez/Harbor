import React from 'react';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

interface OrgPointerProps {
  width?: number;
  height?: number;
}

const OrgPointer: React.FC<OrgPointerProps> = ({ width = 67, height = 67 }) => (
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
      fill="url(#paint0_radial_6_3276)"
      fillOpacity="0.5"
    />
    <Defs>
      <RadialGradient
        id="paint0_radial_6_3276"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(90 0 33.5) scale(33.5)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#2F5DD3" stopOpacity="0" />
        <Stop offset="1" stopColor="#2F5DD3" />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default OrgPointer;
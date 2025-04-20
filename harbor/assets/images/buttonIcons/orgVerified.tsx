import React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

interface OrgVerifiedIconProps {
  width?: number; // Optional width prop
  height?: number; // Optional height prop
}

const OrgVerifiedIcon: React.FC<OrgVerifiedIconProps> = ({ width = 17, height = 17 }) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 17 17"
  >
    <G fill="#fff" clipPath="url(#clip0_11_1253)">
      <Path d="M7.079 11.376 4.25 8.546l.943-.942 1.886 1.885 3.77-3.771.944.943z" />
      <Path
        fillRule="evenodd"
        d="M.917 8.5a7.333 7.333 0 1 1 14.667 0 7.333 7.333 0 0 1-14.667 0m7.333 6a6 6 0 1 1 0-12.001 6 6 0 0 1 0 12.001"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_11_1253">
        <Path fill="#fff" d="M.25.5h16v16h-16z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default OrgVerifiedIcon;
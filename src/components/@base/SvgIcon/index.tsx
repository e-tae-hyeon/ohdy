import colors from 'common/styles/colors';
import React from 'react';
import * as Icons from './icons';

type SvgIconProps = {
  name: keyof typeof Icons;
  color?: string;
  size?: number;
  opacity?: number;
};

function SvgIcon({
  name,
  color = colors.black,
  size = 20,
  opacity = 1,
}: SvgIconProps) {
  const Icon = Icons[name];

  return <Icon color={color} width={size} height={size} opacity={opacity} />;
}

export default SvgIcon;

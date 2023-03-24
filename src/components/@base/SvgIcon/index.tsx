import colors from 'common/styles/colors';
import React from 'react';
import * as Icons from './icons';

type SvgIconProps = {
  name: keyof typeof Icons;
  color?: string;
  size?: number;
};

function SvgIcon({name, color = colors.black, size = 16}: SvgIconProps) {
  const Icon = Icons[name];

  return <Icon color={color} width={size} height={size} />;
}

export default SvgIcon;

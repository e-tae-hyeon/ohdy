import React from 'react';
import AppText, {TypoStyle} from '../AppText';

type LogotypoProps = {
  size: 'small' | 'medium' | 'large';
};

function Logotypo({size = 'medium'}: LogotypoProps) {
  return <AppText typoStyle={sizeMap[size]}>ohdy</AppText>;
}

export default Logotypo;

const sizeMap: Record<string, TypoStyle> = {
  small: 'H3',
  medium: 'H1',
  large: 'Hero',
};

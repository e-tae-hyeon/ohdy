import React from 'react';
import {View} from 'react-native';

type SpacerProps = {
  size?: 'small' | 'medium' | 'large';
};

function Spacer({size = 'medium'}: SpacerProps) {
  return <View style={{height: sizeMap[size]}} />;
}

export default Spacer;

const sizeMap = {
  small: 16,
  medium: 32,
  large: 48,
};

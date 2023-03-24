import React from 'react';
import {Text} from 'react-native';

type LogotypoProps = {
  size: 'small' | 'medium' | 'large';
};

function Logotypo({size = 'medium'}: LogotypoProps) {
  return (
    <Text
      style={{
        fontSize: sizeMap[size],
        fontFamily: 'Pretendard-ExtraBold',
      }}>
      ohdy
    </Text>
  );
}

export default Logotypo;

const sizeMap = {
  small: 24,
  medium: 32,
  large: 42,
};

import colors from 'common/styles/colors';
import React from 'react';
import {Text} from 'react-native';

type LogotypoProps = {
  size: 'small' | 'medium' | 'large';
};

function Logotypo({size = 'medium'}: LogotypoProps) {
  return (
    <Text
      style={{
        fontFamily: 'HSGaeulSenggak-2.0',
        fontSize: sizeMap[size],
        textAlignVertical: 'center',
        color: colors.black,
      }}>
      ohdy
    </Text>
  );
}

export default Logotypo;

const sizeMap: Record<string, number> = {
  small: 20,
  medium: 28,
  large: 42,
};

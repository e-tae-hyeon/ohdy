import {useNavigation} from '@react-navigation/native';
import colors from 'common/styles/colors';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {Pressable} from 'react-native';

type BackProps = {
  onPress?: () => void;
  color?: string;
};

function Back({onPress, color = colors.black}: BackProps) {
  const {goBack} = useNavigation();

  const handlePress = () => {
    if (onPress) onPress();
    goBack();
  };

  return (
    <Pressable onPress={handlePress} hitSlop={8}>
      <SvgIcon name="chevronLeft" size={32} color={color} />
    </Pressable>
  );
}

export default Back;

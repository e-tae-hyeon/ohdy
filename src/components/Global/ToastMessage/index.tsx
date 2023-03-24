import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexContainer from 'components/@base/FlexContainer';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {Pressable, View} from 'react-native';

export type ToastType = 'success' | 'error';

type ToastMessageProps = {
  type: ToastType;
  message: string;
  onPress?: () => void;
};

function ToastMessage({type, message, onPress}: ToastMessageProps) {
  const {name, color} = iconMap[type];

  return (
    <Pressable onPress={onPress} className="w-full">
      <FlexContainer
        direction="row"
        gapSize="small"
        className="p-4 mx-4 bg-black rounded-2xl">
        <SvgIcon name={name} color={color} />
        <AppText color={colors.white}>{message}</AppText>
      </FlexContainer>
    </Pressable>
  );
}

export default ToastMessage;

const iconMap: Record<ToastType, {name: any; color: string}> = {
  success: {
    name: 'checkCircle' as const,
    color: colors.success,
  },
  error: {
    name: 'infoCircle' as const,
    color: colors.danger,
  },
};

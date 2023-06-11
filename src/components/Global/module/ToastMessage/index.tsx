import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
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
    <Pressable onPress={onPress} className="w-full ">
      <View className="flex-row items-center justify-between p-4 mx-4 bg-black rounded-2xl">
        <FlexView direction="row" gapSize="small" className="items-center">
          <SvgIcon name={name} color={color} />
          <AppText typoStyle="B2" color={colors.white}>
            {message}
          </AppText>
        </FlexView>
        {onPress?.name !== 'noop' && (
          <FlexView direction="row" gapSize="tiny">
            <AppText typoStyle="B2" color={colors.gray[400]}>
              보러가기
            </AppText>
            <SvgIcon name="chevronRight" size={14} color={colors.gray[400]} />
          </FlexView>
        )}
      </View>
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

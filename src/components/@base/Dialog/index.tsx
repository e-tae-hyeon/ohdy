import {View} from 'react-native';
import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import FlexView from '../FlexView';
import AppText from '../AppText';
import colors from 'common/styles/colors';
import Btn from '../Btn';
import Overlay from '../Overlay';

export type DialogConfig = {
  title: string;
  description?: string;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel?: () => void;
  onConfirm: () => void;
};

type Props = DialogConfig & {
  isVisible: boolean;
};

function Dialog({
  isVisible,
  title,
  description,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}: Props) {
  if (!isVisible) return null;

  return (
    <>
      <Overlay />
      <View className="absolute inset-0 items-center justify-center">
        <Animated.View
          entering={FadeInDown}
          className="p-8 bg-white rounded-2xl w-[85vw]">
          <FlexView>
            <AppText typoStyle="H3">{title}</AppText>
            <AppText typoStyle="B2">{description}</AppText>
            <FlexView direction="row">
              {onCancel && (
                <Btn
                  label={cancelLabel ?? '취소'}
                  theme="secondary"
                  isFit={false}
                  onPress={onCancel}
                />
              )}
              <Btn
                label={confirmLabel ?? '확인'}
                onPress={onConfirm}
                isFit={false}
              />
            </FlexView>
          </FlexView>
        </Animated.View>
      </View>
    </>
  );
}

export default Dialog;

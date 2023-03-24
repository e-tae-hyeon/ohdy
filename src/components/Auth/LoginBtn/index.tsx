import AppText from 'components/@base/AppText';
import FlexContainer from 'components/@base/FlexContainer';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {Pressable, View} from 'react-native';

export type LoginBtnIcon = 'apple' | 'kakao' | 'mail';

type LoginBtnProps = {
  icon: LoginBtnIcon;
  label: string;
  colors: {
    bgColor: string;
    accentColor: string;
  };
  onPress: () => void;
};

function LoginBtn({icon, label, colors, onPress}: LoginBtnProps) {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-2xl"
      style={{backgroundColor: colors.bgColor}}>
      <FlexContainer
        direction="row"
        gapSize="small"
        className="items-center justify-center p-2">
        <SvgIcon name={icon} color={colors.accentColor} />
        <AppText typeStyle="B1" color={colors.accentColor}>
          {label}
        </AppText>
      </FlexContainer>
    </Pressable>
  );
}

export default LoginBtn;

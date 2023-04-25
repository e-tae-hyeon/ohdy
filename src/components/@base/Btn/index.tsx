import colors from 'common/styles/colors';
import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';

type BtnProps = PressableProps & {
  theme?: 'primary' | 'secondary';
  label: string;
  isFit?: boolean;
};

function Btn({
  theme = 'primary',
  disabled,
  label,
  isFit = true,
  ...rest
}: BtnProps) {
  const {bgColor, textColor} = themeMap[theme];

  return (
    <Pressable
      disabled={disabled}
      className={`${
        isFit ? 'px-4' : 'flex-1'
      } items-center justify-center py-2 rounded-2xl`}
      style={{backgroundColor: bgColor, opacity: disabled ? 0.2 : 1}}
      {...rest}>
      <Text
        style={{
          fontFamily: 'Pretendard-Bold',
          color: textColor,
          fontSize: 16,
          textAlignVertical: 'center',
        }}>
        {label}
      </Text>
    </Pressable>
  );
}

export default Btn;

const themeMap = {
  primary: {
    bgColor: colors.black,
    textColor: colors.white,
  },
  secondary: {
    bgColor: colors.gray[200],
    textColor: colors.black,
  },
};

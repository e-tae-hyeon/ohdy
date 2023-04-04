import colors from 'common/styles/colors';
import React from 'react';
import {Text} from 'react-native';

type AppTextProps = {
  typoStyle?: TypoStyle;
  color?: string;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
};

function AppText({
  typoStyle = 'B1',
  color = colors.black,
  align = 'left',
  children,
}: AppTextProps) {
  const {fontSize, fontFamily} = typoStyleMap[typoStyle];

  return (
    <Text
      style={{
        fontSize,
        fontFamily,
        textAlignVertical: 'center',
        textAlign: align,
        color,
      }}>
      {children}
    </Text>
  );
}

export default AppText;

export type TypoStyle = 'Hero' | 'H1' | 'H2' | 'H3' | 'B1' | 'B2' | 'Action';

const typoStyleMap: Record<TypoStyle, {fontSize: number; fontFamily: string}> =
  {
    Hero: {fontSize: 40, fontFamily: 'Pretendard-Bold'},
    H1: {fontSize: 28, fontFamily: 'Pretendard-Bold'},
    H2: {fontSize: 24, fontFamily: 'Pretendard-Bold'},
    H3: {fontSize: 20, fontFamily: 'Pretendard-Bold'},
    B1: {fontSize: 16, fontFamily: 'Pretendard-Medium'},
    B2: {fontSize: 14, fontFamily: 'Pretendard-Medium'},
    Action: {fontSize: 16, fontFamily: 'Pretendard-Bold'},
  };

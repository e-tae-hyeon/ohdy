import colors from 'common/styles/colors';
import React from 'react';
import {Text} from 'react-native';

type AppTextProps = {
  typeStyle?: TypoStyle;
  color?: string;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
};

function AppText({
  typeStyle = 'B1',
  color = colors.black,
  align = 'left',
  children,
}: AppTextProps) {
  const {fontSize, fontWeight} = typoStyleMap[typeStyle];

  return (
    <Text
      className="font-default"
      style={{
        fontSize,
        fontWeight,
        textAlignVertical: 'center',
        textAlign: align,
        color,
      }}>
      {children}
    </Text>
  );
}

export default AppText;

export type TypoStyle = 'Hero' | 'H1' | 'H2' | 'H3' | 'B1' | 'B2';

const typoStyleMap: Record<TypoStyle, {fontSize: number; fontWeight: any}> = {
  Hero: {fontSize: 40, fontWeight: '700'},
  H1: {fontSize: 28, fontWeight: '700'},
  H2: {fontSize: 24, fontWeight: '700'},
  H3: {fontSize: 20, fontWeight: '700'},
  B1: {fontSize: 16, fontWeight: '500'},
  B2: {fontSize: 14, fontWeight: '500'},
};

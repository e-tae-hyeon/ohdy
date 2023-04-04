import React from 'react';
import {View} from 'react-native';

type FlexViewProps = {
  gapSize?: 'small' | 'medium' | 'large';
  direction?: 'row' | 'column';
  className?: string;
  children: React.ReactNode;
};

function FlexView({
  gapSize = 'medium',
  direction = 'column',
  className,
  children,
}: FlexViewProps) {
  return (
    <View
      className={className}
      style={{flexDirection: direction, gap: gapSizeMap[gapSize]}}>
      {children}
    </View>
  );
}

export default FlexView;

const gapSizeMap = {
  small: 8,
  medium: 16,
  large: 32,
};

import React from 'react';
import {View} from 'react-native';

type FlexContainerProps = {
  gapSize?: 'small' | 'medium' | 'large';
  direction?: 'row' | 'column';
  children: React.ReactNode;
  className?: string;
};

function FlexContainer({
  gapSize = 'medium',
  direction = 'column',
  children,
  className,
}: FlexContainerProps) {
  return (
    <View
      className={className}
      style={{flexDirection: direction, gap: gapSizeMap[gapSize]}}>
      {children}
    </View>
  );
}

export default FlexContainer;

const gapSizeMap = {
  small: 8,
  medium: 16,
  large: 32,
};

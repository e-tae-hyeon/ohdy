import colors from 'common/styles/colors';
import React from 'react';
import {View} from 'react-native';
import AppText from '../AppText';

type TagProps = {
  label: string;
  bgColor?: string;
  textColor?: string;
};

function Tag({
  label,
  bgColor = colors.gray[200],
  textColor = colors.black,
}: TagProps) {
  return (
    <View
      className="items-center self-start justify-center px-2 py-1 rounded-2xl"
      style={{backgroundColor: bgColor}}>
      <AppText typoStyle="B2" color={textColor}>
        {label}
      </AppText>
    </View>
  );
}

export default Tag;

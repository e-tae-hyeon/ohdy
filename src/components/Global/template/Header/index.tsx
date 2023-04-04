import AppText from 'components/@base/AppText';
import React from 'react';
import {View} from 'react-native';

type HeaderProps = {
  title: string;
  right?: React.ReactNode;
};

function Header({title, right}: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between p-2">
      <AppText typoStyle="H3">{title}</AppText>
      {right}
    </View>
  );
}

export default Header;

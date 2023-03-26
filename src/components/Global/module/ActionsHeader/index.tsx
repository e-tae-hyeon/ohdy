import AppText from 'components/@base/AppText';
import React from 'react';
import {View} from 'react-native';
import Back from '../Back';

type ActionsHeaderProps = {
  title?: string;
  onPressBack?: () => void;
  right?: React.ReactNode;
};

function ActionsHeader({title, onPressBack, right}: ActionsHeaderProps) {
  return (
    <View className="z-10 flex-row justify-between h-12 p-2">
      <Back onPress={onPressBack} />
      {title ? (
        <View className="absolute inset-0 items-center justify-center">
          <AppText>{title}</AppText>
        </View>
      ) : undefined}
      {right}
    </View>
  );
}

export default ActionsHeader;

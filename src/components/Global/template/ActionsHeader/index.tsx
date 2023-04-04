import AppText from 'components/@base/AppText';
import Back from 'components/Global/module/Back';
import React from 'react';
import {View} from 'react-native';

type ActionsHeaderProps = {
  title?: string;
  onPressBack?: () => void;
  right?: React.ReactNode;
};

function ActionsHeader({title, onPressBack, right}: ActionsHeaderProps) {
  return (
    <View className="z-10 flex-row justify-between p-2">
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

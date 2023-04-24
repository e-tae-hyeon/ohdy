import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import Back from 'components/Global/module/Back';
import React from 'react';
import {View} from 'react-native';

type ActionsHeaderProps = {
  title?: string;
  onPressBack?: () => void;
  right?: React.ReactNode;
  tintColor?: string;
  bgColor?: string;
};

function ActionsHeader({
  title,
  onPressBack,
  right,
  tintColor = colors.black,
  bgColor,
}: ActionsHeaderProps) {
  return (
    <View
      className="z-10 flex-row justify-between p-2"
      style={{backgroundColor: bgColor}}>
      <View className="z-50">
        <Back onPress={onPressBack} color={tintColor} />
      </View>
      {title ? (
        <View className="absolute inset-0 items-center justify-center">
          <AppText color={tintColor} typoStyle="Action">
            {title}
          </AppText>
        </View>
      ) : undefined}
      {right}
    </View>
  );
}

export default ActionsHeader;

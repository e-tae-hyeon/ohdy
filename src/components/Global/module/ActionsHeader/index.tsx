import {useNavigation} from '@react-navigation/native';
import AppText from 'components/@base/AppText';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {Pressable, View} from 'react-native';

type ActionsHeaderProps = {
  title?: string;
  onPressBack?: () => void;
};

function ActionsHeader({title, onPressBack}: ActionsHeaderProps) {
  const {goBack} = useNavigation();

  return (
    <View className="z-10 flex-row justify-between p-2">
      <Pressable onPress={onPressBack ?? goBack} className="p-2 m-[-8px]">
        <SvgIcon name="chevronLeft" size={32} />
      </Pressable>
      {title ? (
        <View className="absolute inset-0 items-center justify-center">
          <AppText>{title}</AppText>
        </View>
      ) : undefined}
    </View>
  );
}

export default ActionsHeader;

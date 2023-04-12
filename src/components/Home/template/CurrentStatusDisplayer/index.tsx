import AppText from 'components/@base/AppText';
import React from 'react';
import {View} from 'react-native';

function CurretStatusDisplayer() {
  return (
    <View className="p-4">
      <AppText typoStyle="H3">지금 인기 있는 장소에요</AppText>
    </View>
  );
}

export default CurretStatusDisplayer;

import AppText from 'components/@base/AppText';
import React from 'react';
import {View} from 'react-native';

type PlaceDetailImageIndicatorProps = {
  current: number;
  max: number;
};

function PlaceDetailImageIndicator({
  current = 0,
  max = 0,
}: PlaceDetailImageIndicatorProps) {
  return (
    <View
      className="items-center self-end justify-center w-12 py-1 m-4 rounded-2xl"
      style={{backgroundColor: 'rgba(217, 217, 217, 0.5)'}}>
      <AppText typoStyle="Caption">
        {current}/{max}
      </AppText>
    </View>
  );
}

export default PlaceDetailImageIndicator;

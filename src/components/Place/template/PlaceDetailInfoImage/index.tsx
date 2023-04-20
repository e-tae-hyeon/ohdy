import {useRoute} from '@react-navigation/native';
import PlaceDetailImageSkeleton from 'components/Place/skeleton/PlaceDetailImageSkeleton';
import usePlace from 'hooks/usePlace';
import {PlaceDetailScreenRouteProp} from 'navigations/RootStack/types';
import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

function PlaceDetailInfoImage() {
  const {width} = useWindowDimensions();

  const {
    params: {id},
  } = useRoute<PlaceDetailScreenRouteProp>();
  const {place, isLoading} = usePlace(id);

  if (isLoading)
    return (
      <View className="p-4">
        <PlaceDetailImageSkeleton />
      </View>
    );

  const {infoImages} = place!;

  return (
    <View className="items-center justify-center py-4">
      <AutoHeightImage width={width - 32} source={{uri: infoImages[0].uri}} />
    </View>
  );
}

export default PlaceDetailInfoImage;

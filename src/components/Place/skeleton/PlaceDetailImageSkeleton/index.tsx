import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function PlaceDetailImageSkeleton() {
  const {width, height} = useWindowDimensions();

  return (
    <SkeletonPlaceholder>
      <View style={{width, height: height / 2}} />
    </SkeletonPlaceholder>
  );
}

export default PlaceDetailImageSkeleton;

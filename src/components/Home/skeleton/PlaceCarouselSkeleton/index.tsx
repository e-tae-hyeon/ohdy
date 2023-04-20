import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function PlaceCarouselSkeleton() {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <SkeletonPlaceholder>
        <View
          style={{
            width: width * 0.7,
            height: height * 0.55,
            maxHeight: 460,
            alignSelf: 'center',
          }}
        />
      </SkeletonPlaceholder>
    </View>
  );
}

export default PlaceCarouselSkeleton;

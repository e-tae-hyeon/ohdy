import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function PlaceIndicatorSkeleton() {
  return (
    <View className="py-2">
      <SkeletonPlaceholder borderRadius={16}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
          }}>
          <View style={{width: 40, height: 8}} />
          <View style={{width: 40, height: 8}} />
          <View style={{width: 40, height: 8}} />
        </View>
      </SkeletonPlaceholder>
    </View>
  );
}

export default PlaceIndicatorSkeleton;

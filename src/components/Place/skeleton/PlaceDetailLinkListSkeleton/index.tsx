import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function PlaceDetailLinkListSkeleton() {
  return (
    <View className="p-4">
      <SkeletonPlaceholder borderRadius={16}>
        <View style={{gap: 16}}>
          <View style={{width: 120, height: 20}} />
          <View style={{width: 60, height: 20}} />
          <View style={{width: 60, height: 20}} />
        </View>
      </SkeletonPlaceholder>
    </View>
  );
}

export default PlaceDetailLinkListSkeleton;

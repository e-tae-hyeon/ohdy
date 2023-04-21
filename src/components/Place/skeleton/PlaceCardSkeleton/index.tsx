import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function PlaceCardSkeleton() {
  return (
    <View className="flex-1 p-2">
      <SkeletonPlaceholder borderRadius={8}>
        <View style={{width: '100%', gap: 8}}>
          <View style={{width: '100%', aspectRatio: 1}} />
          <View style={{gap: 4}}>
            <View style={{width: 120, height: 16}} />
            <View style={{width: 40, height: 12}} />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
}

export default PlaceCardSkeleton;

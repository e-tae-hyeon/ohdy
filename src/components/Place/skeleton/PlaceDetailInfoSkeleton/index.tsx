import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function PlaceDetailInfoSkeleton() {
  return (
    <View className="p-4">
      <SkeletonPlaceholder borderRadius={16}>
        <View style={{gap: 16}}>
          <View style={{flexDirection: 'row', gap: 16}}>
            <View style={{width: 160, height: 20}} />
            <View style={{width: 60, height: 20}} />
          </View>
          <View style={{width: 60, height: 20}} />
          <View style={{width: 240, height: 20}} />
          <View style={{flexDirection: 'row', gap: 16}}>
            <View style={{width: 60, height: 20}} />
            <View style={{width: 60, height: 20}} />
            <View style={{width: 60, height: 20}} />
            <View style={{width: 60, height: 20}} />
          </View>
          <View style={{width: 60, height: 20}} />
          <View style={{width: 60, height: 20}} />
          <View style={{flexDirection: 'row', gap: 16}}>
            <View style={{width: 60, height: 20}} />
            <View style={{width: 60, height: 20}} />
            <View style={{width: 60, height: 20}} />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
}

export default PlaceDetailInfoSkeleton;

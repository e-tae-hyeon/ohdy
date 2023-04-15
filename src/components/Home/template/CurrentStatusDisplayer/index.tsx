import AppText from 'components/@base/AppText';
import useMyProfile from 'hooks/useMyProfile';
import useRecommandedPlaces from 'hooks/useRecommandedPlaces';
import React from 'react';
import {View} from 'react-native';

function CurrentStatusDisplayer() {
  const {isRecommanded, isLoadingRecommanded} = useRecommandedPlaces();
  const myProfile = useMyProfile();

  const showStatusMessage = () => {
    if (isLoadingRecommanded) return '취향 맞춤 장소 탐색 중...';
    if (isRecommanded) return `${myProfile?.nickname}님에게 딱 맞는 장소에요`;
    return '지금 인기 있는 장소에요';
  };

  return (
    <View className="p-4">
      <AppText typoStyle="H3">{showStatusMessage()}</AppText>
    </View>
  );
}

export default CurrentStatusDisplayer;

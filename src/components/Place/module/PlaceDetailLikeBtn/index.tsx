import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import React from 'react';
import {Pressable, View} from 'react-native';
import HeartIcon from '../HeartIcon';

type PlaceDetailLikeBtnProps = {
  isLiked: boolean;
  onPress: () => void;
};

function PlaceDetailLikeBtn({isLiked, onPress}: PlaceDetailLikeBtnProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center px-4 py-2 bg-black rounded-2xl">
      <HeartIcon isLiked={isLiked} />
      <View className="absolute inset-x-0 items-center">
        <AppText color={colors.white}>좋아하는 장소에 추가하기</AppText>
      </View>
    </Pressable>
  );
}

export default PlaceDetailLikeBtn;

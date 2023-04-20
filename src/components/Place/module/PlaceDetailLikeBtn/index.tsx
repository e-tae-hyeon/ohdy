import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {Pressable, View} from 'react-native';
import Animated, {BounceIn} from 'react-native-reanimated';

type PlaceDetailLikeBtnProps = {
  isLiked: boolean;
  onPress: () => void;
};

function PlaceDetailLikeBtn({isLiked, onPress}: PlaceDetailLikeBtnProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center px-4 py-2 bg-black rounded-2xl">
      {isLiked && (
        <Animated.View entering={BounceIn}>
          <SvgIcon name="heartFilled" color="#F43053" />
        </Animated.View>
      )}
      {!isLiked && (
        <Animated.View entering={BounceIn}>
          <SvgIcon name="heart" color={colors.white} />
        </Animated.View>
      )}
      <View className="absolute inset-x-0 items-center">
        <AppText color={colors.white}>좋아하는 장소에 추가하기</AppText>
      </View>
    </Pressable>
  );
}

export default PlaceDetailLikeBtn;

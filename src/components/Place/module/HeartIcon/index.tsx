import colors from 'common/styles/colors';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import Animated, {BounceIn} from 'react-native-reanimated';

type HeartIconProps = {
  isLiked: boolean;
  animated?: boolean;
};

function HeartIcon({isLiked, animated = false}: HeartIconProps) {
  return (
    <>
      {isLiked && (
        <Animated.View entering={animated ? BounceIn : undefined}>
          <SvgIcon name="heartFilled" color="#F43053" />
        </Animated.View>
      )}
      {!isLiked && (
        <Animated.View entering={animated ? BounceIn : undefined}>
          <SvgIcon name="heart" color={colors.white} />
        </Animated.View>
      )}
    </>
  );
}

export default HeartIcon;

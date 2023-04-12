import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import React from 'react';
import {Pressable, View} from 'react-native';

type PlaceIndicatorItemProps = {
  categoryName: string;
  isSelected: boolean;
  onPress: () => void;
};

function PlaceIndicatorItem({
  isSelected,
  categoryName,
  onPress,
}: PlaceIndicatorItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`${
        isSelected ? 'border-b-black' : 'border-b-white'
      } pb-1 border-b`}>
      <AppText
        typoStyle="B2"
        color={isSelected ? colors.black : colors.gray[300]}>
        {categoryName}
      </AppText>
    </Pressable>
  );
}

export default PlaceIndicatorItem;

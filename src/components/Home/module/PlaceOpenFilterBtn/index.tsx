import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {Pressable} from 'react-native';

type PlaceOpenFilterBtnProps = {
  onPress: () => void;
};

function PlaceOpenFilterBtn({onPress}: PlaceOpenFilterBtnProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      className="items-center self-center justify-center p-2">
      <FlexView gapSize="tiny" className="items-center">
        <AppText>filter</AppText>
        <SvgIcon name="chevronDown" />
      </FlexView>
    </Pressable>
  );
}

export default PlaceOpenFilterBtn;

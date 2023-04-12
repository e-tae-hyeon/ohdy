import Accordion from 'components/@base/Accordion';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import Input from 'components/@base/Input';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {Pressable} from 'react-native';
import usePlaceFilterStore from 'stores/usePlaceFilterStore';

function PlaceFilterMaxHeadCount() {
  const {maxHeadCount, setMaxHeadCount} = usePlaceFilterStore();

  const preview =
    maxHeadCount !== 0 ? `${maxHeadCount.toLocaleString()}명` : '';

  const increaseMaxHeadCount = () =>
    setMaxHeadCount(Math.min(maxHeadCount + 1, 50));
  const decreaseMaxHeadCount = () =>
    setMaxHeadCount(Math.max(maxHeadCount - 1, 0));

  return (
    <Accordion name="maxHeadCount" label="인원" preview={preview} exclusive>
      <FlexView direction="row" className="items-center justify-center">
        <Pressable onPress={decreaseMaxHeadCount} hitSlop={16}>
          <SvgIcon name="minus" />
        </Pressable>
        <Input value={maxHeadCount.toString()} keyboardType="number-pad" />
        <Pressable onPress={increaseMaxHeadCount} hitSlop={16}>
          <SvgIcon name="plus" />
        </Pressable>
      </FlexView>
    </Accordion>
  );
}

export default PlaceFilterMaxHeadCount;

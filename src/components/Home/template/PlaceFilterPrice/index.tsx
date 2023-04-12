import MultiSlider from '@ptomasroos/react-native-multi-slider';
import colors from 'common/styles/colors';
import Accordion from 'components/@base/Accordion';
import AppText from 'components/@base/AppText';
import React from 'react';
import {View} from 'react-native';
import usePlaceFilterStore, {
  MAX_PRICE,
  MIN_PRICE,
} from 'stores/usePlaceFilterStore';

function PlaceFilterPrice() {
  const {price, setPrice} = usePlaceFilterStore();

  const preview =
    price.min !== MIN_PRICE || price.max !== MAX_PRICE
      ? `${price.min.toLocaleString()}원 ~ ${price.max.toLocaleString()}원`
      : '';

  const priceOptions = Array(61) // 0원 ~ 300,000원
    .fill(0)
    .map((_, idx) => idx * 5000);

  return (
    <Accordion name="price" label="금액" preview={preview} exclusive>
      <View className="items-center justify-center">
        <AppText typoStyle="B2">
          {price.min.toLocaleString()}원 ~ {price.max.toLocaleString()}원
        </AppText>
        <MultiSlider
          values={[price.min, price.max]}
          onValuesChange={([min, max]) => setPrice({min, max})}
          min={MIN_PRICE}
          max={MAX_PRICE}
          optionsArray={priceOptions}
          allowOverlap
          snapped
          markerStyle={{width: 16, height: 16}}
          selectedStyle={{backgroundColor: colors.black}}
        />
      </View>
    </Accordion>
  );
}

export default PlaceFilterPrice;

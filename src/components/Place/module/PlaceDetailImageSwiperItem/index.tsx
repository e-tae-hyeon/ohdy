import React from 'react';
import {Image, useWindowDimensions} from 'react-native';

type PlaceDetailImageSwiperItemProps = {
  uri: string;
};

function PlaceDetailImageSwiperItem({uri}: PlaceDetailImageSwiperItemProps) {
  const {width, height} = useWindowDimensions();

  return <Image source={{uri}} style={{width, height: height / 2}} />;
}

export default PlaceDetailImageSwiperItem;

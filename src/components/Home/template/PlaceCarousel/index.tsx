import PlaceCarouselItem from 'components/Home/module/PlaceCarouselItem';
import usePopularPlaces from 'hooks/usePopularPlaces';
import React, {useRef, useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PlaceIndicator from '../PlaceIndicator';
import {Place} from 'apis/types';

function PlaceCarousel() {
  const {width} = useWindowDimensions();
  const {places, parentCategories} = usePopularPlaces();
  const [currentPlace, setCurrentPlace] = useState<Place>(places[0]);
  const carouselRef = useRef<Carousel<Place>>(null);

  const handlePressIndicator = (parentId: number) => {
    if (!carouselRef.current) return;

    const targetIdx = places.findIndex(
      place => place.category.parentId === parentId,
    );
    carouselRef.current.snapToItem(targetIdx);
  };

  return (
    <View>
      <PlaceIndicator
        categories={parentCategories}
        currentPlace={currentPlace}
        onPressItem={handlePressIndicator}
      />
      <Carousel
        ref={carouselRef}
        data={places}
        renderItem={({item}) => <PlaceCarouselItem place={item} />}
        itemWidth={width * 0.7}
        onSnapToItem={idx => setCurrentPlace(places[idx])}
        sliderWidth={width}
        loop
      />
    </View>
  );
}

export default PlaceCarousel;
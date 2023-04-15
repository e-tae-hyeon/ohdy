import PlaceCarouselItem from 'components/Home/module/PlaceCarouselItem';
import React, {useRef, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PlaceIndicator from '../PlaceIndicator';
import {Place} from 'apis/types';
import FlexView from 'components/@base/FlexView';
import useRecommandedPlaces from 'hooks/useRecommandedPlaces';
import PlaceCarouselSkeleton from 'components/Home/module/PlaceCarouselSkeleton';
import PlaceIndicatorSkeleton from 'components/Home/module/PlaceIndicatorSkeleton';

function PlaceCarousel() {
  const {width} = useWindowDimensions();
  const {places, isLoading, parentCategories} = useRecommandedPlaces();
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
    <FlexView className="flex-1 py-4">
      {isLoading ? (
        <PlaceIndicatorSkeleton />
      ) : (
        <PlaceIndicator
          categories={parentCategories}
          currentPlace={currentPlace}
          onPressItem={handlePressIndicator}
        />
      )}
      <Carousel
        ref={carouselRef}
        data={places}
        renderItem={({item}) =>
          isLoading ? (
            <PlaceCarouselSkeleton />
          ) : (
            <PlaceCarouselItem place={item} />
          )
        }
        itemWidth={width * 0.7}
        onSnapToItem={idx => setCurrentPlace(places[idx])}
        sliderWidth={width}
        onLayout={() => setCurrentPlace(places[0])}
        loop
      />
    </FlexView>
  );
}

export default PlaceCarousel;

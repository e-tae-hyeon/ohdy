import PlaceCarouselItem from 'components/Home/module/PlaceCarouselItem';
import React, {useCallback, useRef, useState} from 'react';
import {ListRenderItem, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PlaceIndicator from '../PlaceIndicator';
import {Place} from 'apis/types';
import FlexView from 'components/@base/FlexView';
import useRecommandedPlaces from 'hooks/useRecommandedPlaces';
import PlaceCarouselSkeleton from 'components/Home/module/PlaceCarouselSkeleton';
import PlaceIndicatorSkeleton from 'components/Home/module/PlaceIndicatorSkeleton';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/types';

function PlaceCarousel() {
  const {width} = useWindowDimensions();
  const {places, isLoading, parentCategories} = useRecommandedPlaces();
  const [currentPlace, setCurrentPlace] = useState<Place>(places[0]);
  const carouselRef = useRef<Carousel<Place>>(null);
  const {navigate} = useNavigation<RootStackNavigationProp>();

  const handlePressIndicator = (parentId: number) => {
    if (!carouselRef.current) return;

    const targetIdx = places.findIndex(
      place => place.category.parentId === parentId,
    );
    carouselRef.current.snapToItem(targetIdx);
  };

  const handlePressCarouselItem = useCallback(
    (id: number) => {
      if (currentPlace.id !== id) return;
      navigate('PlaceDetail', {id});
    },
    [currentPlace],
  );

  const renderItem: ListRenderItem<Place> = useCallback(
    ({item}) =>
      isLoading ? (
        <PlaceCarouselSkeleton />
      ) : (
        <PlaceCarouselItem place={item} onPress={handlePressCarouselItem} />
      ),
    [isLoading, currentPlace, places],
  );

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
        renderItem={renderItem}
        initialScrollIndex={0}
        itemWidth={width * 0.7}
        sliderWidth={width}
        onSnapToItem={idx => setCurrentPlace(places[idx])}
        onLayout={() => setCurrentPlace(places[0])}
        containerCustomStyle={{flex: 1}}
        loop
      />
    </FlexView>
  );
}

export default PlaceCarousel;

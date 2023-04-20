import {useRoute} from '@react-navigation/native';
import {PlaceImage} from 'apis/types';
import PlaceDetailImageIndicator from 'components/Place/module/PlaceDetailImageIndicator';
import PlaceDetailImageSwiperItem from 'components/Place/module/PlaceDetailImageSwiperItem';
import PlaceDetailImageSkeleton from 'components/Place/skeleton/PlaceDetailImageSkeleton';
import usePlace from 'hooks/usePlace';
import {PlaceDetailScreenRouteProp} from 'navigations/RootStack/types';
import React, {useCallback, useRef, useState} from 'react';
import {ListRenderItem, View, useWindowDimensions} from 'react-native';
import {InView} from 'react-native-intersection-observer';
import Carousel from 'react-native-snap-carousel';
import usePlaceDetailStore from 'stores/usePlaceDetailStore';

function PlaceDetailImageSwiper() {
  const {width} = useWindowDimensions();
  const {
    params: {id},
  } = useRoute<PlaceDetailScreenRouteProp>();
  const {place, isLoading} = usePlace(id);
  const swiperRef = useRef<Carousel<PlaceImage>>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const {setIsShownImageSwiper} = usePlaceDetailStore();

  const coverImages = place?.coverImages ?? [{} as PlaceImage];

  const renderItem: ListRenderItem<PlaceImage> = useCallback(
    ({item}) =>
      isLoading ? (
        <PlaceDetailImageSkeleton />
      ) : (
        <PlaceDetailImageSwiperItem uri={item.uri} />
      ),
    [isLoading, coverImages],
  );

  return (
    <InView
      className="relative"
      onChange={inView => setIsShownImageSwiper(inView)}>
      <Carousel
        ref={swiperRef}
        data={coverImages}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={idx => setCurrentIdx(idx)}
        onLayout={() => setIsShownImageSwiper(true)}
        loop
        inactiveSlideScale={1}
      />
      {!isLoading && (
        <View className="absolute bottom-0 right-0">
          <PlaceDetailImageIndicator
            max={coverImages.length}
            current={currentIdx + 1}
          />
        </View>
      )}
    </InView>
  );
}

export default PlaceDetailImageSwiper;

import PlaceDetailFooter from 'components/Place/template/PlaceDetailFooter';
import PlaceDetailHeader from 'components/Place/template/PlaceDetailHeader';
import PlaceDetailImageSwiper from 'components/Place/template/PlaceDetailImageSwiper';
import PlaceDetailInfo from 'components/Place/template/PlaceDetailInfo';
import PlaceDetailInfoImage from 'components/Place/template/PlaceDetailInfoImage';
import PlaceDetailLinkList from 'components/Place/template/PlaceDetailLinkList';
import React from 'react';
import {View} from 'react-native';
import {IOScrollView} from 'react-native-intersection-observer';

function PlaceDetailScreen() {
  return (
    <View className="flex-1 bg-white">
      <PlaceDetailHeader />
      <IOScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        rootMargin={{top: -120}}
        className="flex-1 bg-white">
        <PlaceDetailImageSwiper />
        <PlaceDetailInfo />
        <PlaceDetailLinkList />
        <PlaceDetailInfoImage />
      </IOScrollView>
      <PlaceDetailFooter />
    </View>
  );
}

export default PlaceDetailScreen;

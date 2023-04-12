import {Place} from 'apis/types';
import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import React from 'react';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type PlaceCarouselItemProps = {
  place: Place;
};

function PlaceCarouselItem({place}: PlaceCarouselItemProps) {
  const {id, name, description, coverImages, category, location} = place;

  return (
    <ImageBackground
      source={{uri: coverImages[0].uri}}
      className="w-[70vw] h-[55vh] justify-end">
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,1)']}
        className="px-4 py-8">
        <FlexView>
          <FlexView direction="row" gapSize="small" className="items-baseline">
            <AppText typoStyle="H3" color={colors.white}>
              {name}
            </AppText>
            <AppText typoStyle="B2" color={colors.white}>
              {category.name}
            </AppText>
          </FlexView>
          <AppText typoStyle="B2" color={colors.white}>
            {description}
          </AppText>
        </FlexView>
      </LinearGradient>
    </ImageBackground>
  );
}

export default PlaceCarouselItem;

import {PlaceSummary} from 'apis/types';
import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import React from 'react';
import {ImageBackground, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type PlaceCarouselItemProps = {
  place: PlaceSummary;
  onPress: (id: number) => void;
};

function PlaceCarouselItem({place, onPress}: PlaceCarouselItemProps) {
  const {id, name, description, coverImages, category, location} = place;

  return (
    <Pressable onPress={() => onPress(id)}>
      <ImageBackground
        source={{uri: coverImages[0].uri}}
        className="w-[70vw] h-[55vh] justify-end"
        style={{maxHeight: 360}}
        imageStyle={{maxHeight: 360}}>
        <LinearGradient
          colors={[
            'rgba(0,0,0,0.1)',
            'rgba(0,0,0,0.25)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.6)',
          ]}
          className="px-4 py-8">
          <FlexView>
            <FlexView
              direction="row"
              gapSize="small"
              className="items-baseline">
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
    </Pressable>
  );
}

export default React.memo(PlaceCarouselItem);

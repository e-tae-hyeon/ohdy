import {useNavigation} from '@react-navigation/native';
import colors from 'common/styles/colors';
import Btn from 'components/@base/Btn';
import {AuthGroupNavigationProp} from 'navigations/RootStack/types';
import React, {useCallback, useState} from 'react';
import {
  ListRenderItem,
  StatusBar,
  View,
  useWindowDimensions,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Carousel, {Pagination} from 'react-native-snap-carousel';

function Onboarding() {
  const {replace} = useNavigation<AuthGroupNavigationProp>();
  const {width} = useWindowDimensions();

  const onboardingImages = [
    require('assets/images/onboarding-1.png'),
    require('assets/images/onboarding-2.png'),
    require('assets/images/onboarding-3.png'),
  ];
  const [currentIdx, setCurrentIdx] = useState(0);

  const renderItem: ListRenderItem<any> = useCallback(
    ({item}) => <AutoHeightImage width={width} source={item} />,
    [],
  );

  const handlePressStart = () => {
    replace('Auth');
  };

  return (
    <View className="flex-1 bg-[#121212]">
      <StatusBar barStyle={'light-content'} />
      <View className="flex-1">
        <Carousel
          data={onboardingImages}
          renderItem={renderItem}
          itemWidth={width}
          sliderWidth={width}
          inactiveSlideScale={1}
          onSnapToItem={idx => setCurrentIdx(idx)}
        />
        <Pagination
          dotsLength={onboardingImages.length}
          activeDotIndex={currentIdx}
          dotColor={colors.white}
          inactiveDotColor={colors.gray[400]}
          containerStyle={{margin: -32}}
        />
      </View>
      <View className="p-8">
        <Btn label="시작하기" onPress={handlePressStart} theme="secondary" />
      </View>
    </View>
  );
}

export default Onboarding;

import colors from 'common/styles/colors';
import ActionsHeader from 'components/Global/template/ActionsHeader';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import usePlaceDetailStore from 'stores/usePlaceDetailStore';

function PlaceDetailHeader() {
  const {top} = useSafeAreaInsets();
  const {isShownImageSwiper, setIsShownImageSwiper} = usePlaceDetailStore();

  const handlePressBack = () => {
    setIsShownImageSwiper(false);
  };

  return (
    <View
      className={`${
        isShownImageSwiper ? 'bg-transparent' : 'bg-white'
      }  absolute inset-x-0 z-50`}>
      <StatusBar
        barStyle={isShownImageSwiper ? 'light-content' : 'dark-content'}
        backgroundColor={isShownImageSwiper ? undefined : colors.white}
      />
      <View
        className={`${
          isShownImageSwiper
            ? 'bg-transparent'
            : 'bg-white border-b border-neutral-200'
        } `}
        style={{paddingTop: top}}>
        <ActionsHeader
          onPressBack={handlePressBack}
          tintColor={isShownImageSwiper ? colors.white : colors.black}
        />
      </View>
    </View>
  );
}

export default PlaceDetailHeader;

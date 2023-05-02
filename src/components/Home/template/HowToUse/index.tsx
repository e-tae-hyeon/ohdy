import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import Overlay from 'components/@base/Overlay';
import SvgIcon from 'components/@base/SvgIcon';
import PlaceOpenFilterBtn from 'components/Home/module/PlaceOpenFilterBtn';
import React from 'react';
import {Pressable, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useLaunchedStore from 'stores/useLaunchedStore';

function HowToUse() {
  const {isVisibleHowToUse, setIsVisibleHowToUse} = useLaunchedStore();
  const {top, bottom} = useSafeAreaInsets();

  console.log(isVisibleHowToUse);

  if (!isVisibleHowToUse) return null;

  const handlePressClose = () => {
    setIsVisibleHowToUse(false);
  };

  return (
    <>
      <Overlay />
      <View className="absolute inset-0">
        <View className="justify-between flex-1">
          <View
            className="flex-row items-center justify-end p-4"
            style={{paddingTop: top + 16}}>
            <Pressable onPress={handlePressClose} hitSlop={16}>
              <SvgIcon name="xClose" color={colors.white} size={24} />
            </Pressable>
          </View>
          <View style={{paddingBottom: 64 + bottom}}>
            <FlexView>
              <View className="items-center">
                <AppText typoStyle="Action" color={colors.white}>
                  취향과 상황을 입력하고
                </AppText>
                <AppText typoStyle="Action" color={colors.white}>
                  맞춤 장소를 둘러보세요!
                </AppText>
              </View>
              <View className="items-center self-center p-2 bg-white rounded-full">
                <PlaceOpenFilterBtn onPress={() => {}} />
              </View>
            </FlexView>
          </View>
        </View>
      </View>
    </>
  );
}

export default HowToUse;

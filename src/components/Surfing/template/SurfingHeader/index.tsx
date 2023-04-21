import FlexView from 'components/@base/FlexView';
import React from 'react';
import SurfingFilter from '../SurfingFilter';
import {Pressable} from 'react-native';
import AppText from 'components/@base/AppText';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/types';
import colors from 'common/styles/colors';
import SvgIcon from 'components/@base/SvgIcon';

function SurfingHeader() {
  const {navigate} = useNavigation<RootStackNavigationProp>();

  const handlePressSearchbar = () => {
    navigate('Search');
  };

  return (
    <FlexView direction="row" className="items-center p-4">
      <Pressable
        onPress={handlePressSearchbar}
        className="flex-row items-center justify-between flex-1 p-2 bg-neutral-100 rounded-2xl">
        <AppText color={colors.gray[400]}>검색어를 입력해 주세요.</AppText>
        <SvgIcon name="search" color={colors.gray[400]} />
      </Pressable>
      <SurfingFilter />
    </FlexView>
  );
}

export default SurfingHeader;

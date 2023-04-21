import {PlacesOrderMode} from 'apis/types';
import BottomSheet from 'components/@base/BottomSheet';
import FlexView from 'components/@base/FlexView';
import SvgIcon from 'components/@base/SvgIcon';
import SurfingFilterItemBtn from 'components/Surfing/module/SurfingFilterItemBtn';
import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import useSurfingStore from 'stores/useSurfingStore';

function SurfingFilter() {
  const [isVisible, setIsVisible] = useState(false);
  const {orderMode, setOrderMode} = useSurfingStore();

  const openFilter = () => setIsVisible(true);
  const closeFilter = () => setIsVisible(false);

  const handlePressFilterItem = (mode: PlacesOrderMode) => {
    closeFilter();
    setOrderMode(mode);
  };

  return (
    <>
      <Pressable onPress={openFilter}>
        <SvgIcon name="filter" size={24} />
      </Pressable>
      <BottomSheet isVisible={isVisible} onBackDrop={closeFilter}>
        <FlexView className="p-8">
          <SurfingFilterItemBtn
            label="최신순"
            isSelected={orderMode === 'recent'}
            onPress={() => handlePressFilterItem('recent')}
          />
          <SurfingFilterItemBtn
            label="인기순"
            isSelected={orderMode === 'popular'}
            onPress={() => handlePressFilterItem('popular')}
          />
        </FlexView>
      </BottomSheet>
    </>
  );
}

export default SurfingFilter;

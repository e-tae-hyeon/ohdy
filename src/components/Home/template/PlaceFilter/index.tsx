import BottomSheet from 'components/@base/BottomSheet';
import FlexView from 'components/@base/FlexView';
import PlaceOpenFilterBtn from 'components/Home/module/PlaceOpenFilterBtn';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import PlaceFilterLocation from '../PlaceFilterLocation';
import PlaceFilterMaxHeadCount from '../PlaceFilterMaxHeadCount';
import PlaceFilterPrice from '../PlaceFilterPrice';
import PlaceFilterRelationship from '../PlaceFilterRelationship';
import PlaceFilterCategories from '../PlaceFilterCategories';
import Btn from 'components/@base/Btn';
import usePlaceFilterStore from 'stores/usePlaceFilterStore';
import useDisabled from 'hooks/useDisabled';
import useRecommandedPlaces from 'hooks/useRecommandedPlaces';

function PlaceFilter() {
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);
  const {categories} = usePlaceFilterStore();
  const disabled = useDisabled([categories.length <= 0]);
  const {refetchRecommmandedPlaces} = useRecommandedPlaces();

  const openFilter = () => setIsVisibleFilter(true);
  const closeFilter = () => setIsVisibleFilter(false);

  const handlePressComplete = () => {
    try {
      refetchRecommmandedPlaces();
      closeFilter();
    } catch (err) {}
  };

  return (
    <>
      <PlaceOpenFilterBtn onPress={openFilter} />
      <BottomSheet isVisible={isVisibleFilter} onBackDrop={closeFilter}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 32}}
          className="max-h-[90vh]">
          <FlexView gapSize="huge">
            <PlaceFilterLocation />
            <PlaceFilterMaxHeadCount />
            <PlaceFilterPrice />
            <PlaceFilterRelationship />
            <PlaceFilterCategories />
            <Btn
              label={
                disabled ? '가고 싶은 곳을 선택해주세요' : '플레이스 추천받기'
              }
              onPress={handlePressComplete}
              disabled={disabled}
            />
          </FlexView>
        </ScrollView>
      </BottomSheet>
    </>
  );
}

export default PlaceFilter;

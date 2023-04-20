import {useRoute} from '@react-navigation/native';
import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import Tag from 'components/@base/Tag';
import PlaceDetailTagList from 'components/Place/module/PlaceDetailTagList';
import PlaceDetailInfoSkeleton from 'components/Place/skeleton/PlaceDetailInfoSkeleton';
import usePlace from 'hooks/usePlace';
import {PlaceDetailScreenRouteProp} from 'navigations/RootStack/types';
import React from 'react';

function PlaceDetailInfo() {
  const {
    params: {id},
  } = useRoute<PlaceDetailScreenRouteProp>();
  const {place, isLoading} = usePlace(id);

  if (isLoading) return <PlaceDetailInfoSkeleton />;

  const {
    name,
    category,
    location,
    description,
    keywords,
    price,
    maxHeadCount,
    relationships,
  } = place!;

  return (
    <FlexView className="py-4">
      <FlexView direction="row" className="items-baseline px-4">
        <AppText typoStyle="H2">{name}</AppText>
        <AppText color={colors.gray[400]}>{category.name}</AppText>
      </FlexView>
      <FlexView gapSize="small" className="px-4">
        <AppText color={'#818CF8'}>{location.name}</AppText>
        <AppText typoStyle="B2" color={colors.gray[400]}>
          {description}
        </AppText>
      </FlexView>
      <PlaceDetailTagList tags={keywords.map(keyword => keyword.name)} />
      <FlexView className="px-4">
        <Tag label={`대표메뉴 ${price.toLocaleString()}원`} bgColor="#F1C5C5" />
        <Tag label={`최대 인원 ${maxHeadCount}명`} bgColor="#FFF9D9" />
      </FlexView>
      <PlaceDetailTagList
        tags={relationships.map(relationship => relationship.name)}
        tagStyle={{bgColor: '#C4D9F9'}}
      />
    </FlexView>
  );
}

export default PlaceDetailInfo;

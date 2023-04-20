import {useRoute} from '@react-navigation/native';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import PlaceDetailLinkListItem from 'components/Place/module/PlaceDetailLinkListItem';
import PlaceDetailLinkListSkeleton from 'components/Place/skeleton/PlaceDetailLinkListSkeleton';
import usePlace from 'hooks/usePlace';
import {PlaceDetailScreenRouteProp} from 'navigations/RootStack/types';
import React from 'react';

function PlaceDetailLinkList() {
  const {
    params: {id},
  } = useRoute<PlaceDetailScreenRouteProp>();
  const {place, isLoading} = usePlace(id);

  if (isLoading) return <PlaceDetailLinkListSkeleton />;

  const {links} = place!;

  return (
    <FlexView className="p-4">
      <AppText typoStyle="H3">링크</AppText>
      <FlexView>
        {links.map(link => (
          <PlaceDetailLinkListItem link={link} key={link.id} />
        ))}
      </FlexView>
    </FlexView>
  );
}

export default PlaceDetailLinkList;

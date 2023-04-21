import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {PlaceSummary} from 'apis/types';
import FlexView from 'components/@base/FlexView';
import PlaceCard from 'components/Place/module/PlaceCard';
import PlaceCardSkeleton from 'components/Place/skeleton/PlaceCardSkeleton';
import React, {useCallback} from 'react';

type PlaceListProps = {
  placeSummarys: PlaceSummary[];
  isLoading: boolean;
  onRefresh: () => void;
  isRefreshing: boolean;
};

function PlaceList({
  placeSummarys,
  isLoading,
  onRefresh,
  isRefreshing,
}: PlaceListProps) {
  const renderItem: ListRenderItem<PlaceSummary> = useCallback(
    ({item}) => <PlaceCard placeSummary={item} key={item.id} />,
    [placeSummarys],
  );

  if (isLoading)
    return (
      <FlexView direction="row" className="p-4">
        <PlaceCardSkeleton />
        <PlaceCardSkeleton />
      </FlexView>
    );

  return (
    <FlashList
      data={placeSummarys}
      renderItem={renderItem}
      estimatedItemSize={220}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      onRefresh={onRefresh}
      refreshing={isRefreshing}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{padding: 16}}
    />
  );
}

export default PlaceList;

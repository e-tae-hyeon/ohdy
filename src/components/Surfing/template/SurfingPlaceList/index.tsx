import React, {useEffect} from 'react';
import PlaceList from 'components/Place/template/PlaceList';
import usePlaces from 'hooks/usePlaces';
import useSurfingStore from 'stores/useSurfingStore';

function SurfingPlaceList() {
  const {orderMode} = useSurfingStore();
  const {places, isLoading, isFetching, refetch, fetchNext} = usePlaces();

  useEffect(() => {
    refetch({refetchPage: (page, idx) => idx === 0});
  }, [orderMode]);

  return (
    <PlaceList
      placeSummarys={places}
      isLoading={isLoading}
      onRefresh={refetch}
      isRefreshing={isFetching}
      onEndReached={fetchNext}
    />
  );
}

export default SurfingPlaceList;

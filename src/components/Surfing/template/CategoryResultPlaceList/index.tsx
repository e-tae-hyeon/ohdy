import {useRoute} from '@react-navigation/native';
import {useInfiniteQuery} from '@tanstack/react-query';
import {searchPlacesByCategory} from 'apis/places';
import PlaceList from 'components/Place/template/PlaceList';
import {CategoryResultScreenRouteProp} from 'navigations/RootStack/types';
import React from 'react';

function CategoryResultPlaceList() {
  const {
    params: {category},
  } = useRoute<CategoryResultScreenRouteProp>();
  const {data, isLoading, isFetching, hasNextPage, refetch, fetchNextPage} =
    useInfiniteQuery(
      ['placesByCategory', category],
      ({pageParam}) => searchPlacesByCategory({category, cursor: pageParam}),
      {
        getNextPageParam: last =>
          last.pageInfo.hasNextPage ? last.pageInfo.endCursor : undefined,
      },
    );

  const handleEndReached = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  };

  const places = data?.pages.flatMap(page => page.places) ?? [];

  return (
    <PlaceList
      placeSummarys={places}
      isLoading={isLoading}
      isRefreshing={isFetching}
      onRefresh={refetch}
      onEndReached={handleEndReached}
    />
  );
}

export default CategoryResultPlaceList;

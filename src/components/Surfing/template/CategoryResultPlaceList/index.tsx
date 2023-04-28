import {useRoute} from '@react-navigation/native';
import {useInfiniteQuery} from '@tanstack/react-query';
import {searchPlacesByCategory} from 'apis/places';
import EmptyNotice from 'components/Global/module/EmptyNotice';
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

  if (!isLoading && places.length <= 0)
    return <EmptyNotice message="플레이스 준비중입니다." />;

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

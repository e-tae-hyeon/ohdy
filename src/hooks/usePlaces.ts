import {useInfiniteQuery} from '@tanstack/react-query';
import {getPlaces} from 'apis/places';
import useSurfingStore from 'stores/useSurfingStore';

function usePlaces() {
  const {orderMode} = useSurfingStore();
  const {data, isLoading, isFetching, hasNextPage, refetch, fetchNextPage} =
    useInfiniteQuery(
      ['places'],
      ({pageParam}) => getPlaces({cursor: pageParam, mode: orderMode}),
      {
        getNextPageParam: last =>
          last.pageInfo.hasNextPage ? last.pageInfo.endCursor : null,
      },
    );

  const fetchNext = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  };

  const places = data?.pages.flatMap(page => page.places) ?? [];

  return {places, isLoading, isFetching, refetch, fetchNext};
}

export default usePlaces;

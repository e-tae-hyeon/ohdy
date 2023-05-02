import {useInfiniteQuery} from '@tanstack/react-query';
import {searchPlaces} from 'apis/places';
import useSearchStore from 'stores/useSearchStore';

function useSearchPlaces(keyword: string) {
  const {isSearched, setIsSearched} = useSearchStore();

  const {data, isRefetching, refetch, hasNextPage, fetchNextPage} =
    useInfiniteQuery(
      ['searchPlaces', keyword],
      ({pageParam}) => searchPlaces({keyword, cursor: pageParam}),
      {
        enabled: false,
        getNextPageParam: last =>
          last.pageInfo.hasNextPage ? last.pageInfo.endCursor : null,
      },
    );

  const fetchSearch = () => {
    refetch();
    setIsSearched(true);
  };

  const fetchNext = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  };

  const places = data?.pages.flatMap(page => page.places) ?? [];

  return {isSearched, places, isRefetching, fetchSearch, refetch, fetchNext};
}

export default useSearchPlaces;

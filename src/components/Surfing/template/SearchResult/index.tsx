import React from 'react';
import useSearchPlaces from 'hooks/useSearchPlaces';
import SurfingCategories from '../SurfingCategories';
import useSearchStore from 'stores/useSearchStore';
import PlaceList from 'components/Place/template/PlaceList';
import EmptyNotice from 'components/Global/module/EmptyNotice';

function SearchResult() {
  const {keyword, isFoucsedSearchbar} = useSearchStore();
  const {isSearched, places, isRefetching, fetchNext} =
    useSearchPlaces(keyword);

  if (!isSearched || isFoucsedSearchbar) return <SurfingCategories />;

  if (!isRefetching && places.length <= 0)
    return <EmptyNotice message="검색 결과가 없어요." />;

  return (
    <PlaceList
      placeSummarys={places}
      isLoading={isRefetching}
      onEndReached={fetchNext}
    />
  );
}

export default SearchResult;

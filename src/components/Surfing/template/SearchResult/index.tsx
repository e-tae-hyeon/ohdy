import React from 'react';
import useSearchPlaces from 'hooks/useSearchPlaces';
import SurfingCategories from '../SurfingCategories';
import useSearchStore from 'stores/useSearchStore';
import PlaceList from 'components/Place/template/PlaceList';

function SearchResult() {
  const {keyword, isFoucsedSearchbar} = useSearchStore();
  const {isSearched, places, isRefetching, fetchNext, refetch} =
    useSearchPlaces(keyword);

  if (!isSearched || isFoucsedSearchbar) return <SurfingCategories />;

  return (
    <PlaceList
      placeSummarys={places}
      isLoading={isRefetching}
      onEndReached={fetchNext}
    />
  );
}

export default SearchResult;

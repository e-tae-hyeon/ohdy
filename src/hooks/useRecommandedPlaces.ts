import {useQuery} from '@tanstack/react-query';
import {getPopularPlaces, getRecommandedPlaces} from 'apis/places';
import usePlaceFilterStore from 'stores/usePlaceFilterStore';
import {categories as parentCategoriesDomain} from 'domains/categories';
import useToast from './useToast';
import {getErrorMessage} from 'utils/error';

function useRecommandedPlaces() {
  const {locations, maxHeadCount, price, relationship, categories} =
    usePlaceFilterStore();
  const {showToast} = useToast();

  const {data: popularPlaces, isLoading: isLoadingPopular} = useQuery(
    ['popularPlaces'],
    getPopularPlaces,
    {
      onError: err => showToast({type: 'error', message: getErrorMessage(err)}),
    },
  );

  const {
    data: recommandedPlaces,
    isFetching: isLoadingRecommanded,
    refetch: refetchRecommmandedPlaces,
  } = useQuery(
    ['recommandedPlaces'],
    () =>
      getRecommandedPlaces({
        locations,
        maxHeadCount,
        minPrice: price.min,
        maxPrice: price.max,
        relationship,
        categories,
      }),
    {
      enabled: false,
      onError: err => showToast({type: 'error', message: getErrorMessage(err)}),
    },
  );

  const isLoading = isLoadingRecommanded || isLoadingPopular;
  const isRecommanded = !!recommandedPlaces;
  const places = recommandedPlaces ?? popularPlaces ?? [];

  places.sort((a, b) => a.category.parentId! - b.category.parentId!);

  const parentCategories = Array.from(
    new Set(places.map(place => place.category.parentId)),
  ).map(id => ({id: id as number, name: parentCategoriesDomain[id! - 1]}));

  return {
    places,
    isLoading,
    isLoadingRecommanded,
    isRecommanded,
    parentCategories,
    refetchRecommmandedPlaces,
  };
}

export default useRecommandedPlaces;

import {useQuery} from '@tanstack/react-query';
import {getPopularPlaces} from 'apis/places';
import {categories} from 'domains/categories';

function usePopularPlaces() {
  const {data, isLoading} = useQuery(['popularPlaces'], getPopularPlaces, {
    initialData: [],
  });

  const places = data.sort(
    (a, b) => a.category.parentId! - b.category.parentId!,
  );

  const parentCategories = Array.from(
    new Set(places.map(place => place.category.parentId)),
  ).map(id => ({id: id as number, name: categories[id! - 1]}));

  return {isLoading, places, parentCategories};
}

export default usePopularPlaces;

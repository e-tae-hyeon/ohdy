import {useQuery} from '@tanstack/react-query';
import {getPlace} from 'apis/places';

function usePlace(id: number) {
  const {data: place, isLoading} = useQuery(['place', id], () => getPlace(id));

  return {place, isLoading};
}

export default usePlace;

import React, {useCallback} from 'react';
import PlaceList from '../PlaceList';
import {useQuery} from '@tanstack/react-query';
import {getMyLikedPlaces} from 'apis/me';
import useToast from 'hooks/useToast';
import {getErrorMessage} from 'utils/error';
import {useFocusEffect} from '@react-navigation/native';

function LikedPlaceList() {
  const {showToast} = useToast();
  const {data, isLoading, isRefetching, refetch} = useQuery(
    ['myLikedPlaces'],
    getMyLikedPlaces,
    {
      onError: err => {
        showToast({type: 'error', message: getErrorMessage(err)});
      },
    },
  );

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  const places = data ?? [];

  return (
    <PlaceList
      placeSummarys={places}
      isLoading={isLoading}
      onRefresh={refetch}
      isRefreshing={isRefetching}
    />
  );
}

export default LikedPlaceList;

import React, {useCallback} from 'react';
import PlaceList from '../PlaceList';
import {useQuery} from '@tanstack/react-query';
import {getMyLikedPlaces} from 'apis/me';
import useToast from 'hooks/useToast';
import {getErrorMessage} from 'utils/error';
import {useFocusEffect} from '@react-navigation/native';
import EmptyNotice from 'components/Global/module/EmptyNotice';

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

  if (!isLoading && places.length <= 0)
    return <EmptyNotice message="아직 좋아하는 장소가 없어요." />;

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

import client from './@client';
import {GetRecommandedPlacesParams, Place} from './types';

export async function getPopularPlaces() {
  const res = await client.get<Place[]>('/places/popular');

  return res.data;
}

export async function getRecommandedPlaces(params: GetRecommandedPlacesParams) {
  const res = await client.get<Place[]>('/places/recommanded', {
    params,
  });

  return res.data;
}

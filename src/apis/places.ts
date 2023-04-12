import client from './@client';
import {Place} from './types';

export async function getPopularPlaces() {
  const res = await client.get<Place[]>('/places/popular');

  return res.data;
}

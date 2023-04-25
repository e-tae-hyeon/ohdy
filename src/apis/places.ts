import client from './@client';
import {
  GetPlacesParams,
  GetPlacesResult,
  GetRecommandedPlacesParams,
  Place,
  PlaceSummary,
  SearchPlacesByCategoryParams,
  SearchPlacesParams,
} from './types';

export async function getPopularPlaces() {
  const res = await client.get<PlaceSummary[]>('/places/popular');

  return res.data;
}

export async function getRecommandedPlaces(params: GetRecommandedPlacesParams) {
  const res = await client.get<PlaceSummary[]>('/places/recommanded', {
    params,
  });

  return res.data;
}

export async function getPlace(id: number) {
  const res = await client.get<Place>(`/places/${id}`);

  return res.data;
}

export async function likePlace(id: number, controller?: AbortController) {
  const res = await client.post(
    `/places/${id}/like`,
    {},
    {signal: controller?.signal},
  );

  return res.data;
}

export async function unlikePlace(id: number, controller?: AbortController) {
  const res = await client.delete(`/places/${id}/like`, {
    signal: controller?.signal,
  });

  return res.data;
}

export async function getPlaces(params: GetPlacesParams) {
  const res = await client.get<GetPlacesResult>('/places', {params});

  return res.data;
}

export async function searchPlacesByCategory(
  params: SearchPlacesByCategoryParams,
) {
  const res = await client.get<GetPlacesResult>('/places/search/category', {
    params,
  });

  return res.data;
}

export async function searchPlaces(params: SearchPlacesParams) {
  const res = await client.get<GetPlacesResult>('/places/search', {params});

  return res.data;
}

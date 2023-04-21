import client from './@client';
import {PlaceSummary, Profile, User} from './types';

export async function checkMe() {
  const res = await client.get<User>('/me/check');

  return res.data;
}

export async function getMyProfile() {
  const res = await client.get<Profile>('/me/profile');

  return res.data;
}

export async function getMyLikedPlaces() {
  const res = await client.get<PlaceSummary[]>('/me/liked-places');

  return res.data;
}

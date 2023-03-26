import client from './@client';
import {User} from './types';

export async function checkMe() {
  const res = await client.get<User>('/me/check');

  return res.data;
}

import client from './@client';
import {RegisterParams, VerifyCodeParams, VerifyCodeResult} from './types';

export async function sendEmail(email: string) {
  const res = await client.post('/auth/email', {email});

  return res.data;
}

export async function verifyCode(params: VerifyCodeParams) {
  const res = await client.post<VerifyCodeResult>('/auth/email/verify', params);

  return res.data;
}

export async function register({type, ...body}: RegisterParams) {
  const res = await client.post(`/auth/register/${type}`, body);

  return res.data;
}

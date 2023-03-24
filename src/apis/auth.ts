import client from './@client';
import {VerifyCodeParams, VerifyCodeResult} from './types';

export async function sendEmail(email: string) {
  const res = await client.post('/auth/email', {email});

  return res.data;
}

export async function verifyCode(params: VerifyCodeParams) {
  const res = await client.post<VerifyCodeResult>('/auth/email/verify', params);

  return res.data;
}

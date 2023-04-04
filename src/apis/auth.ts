import client from './@client';
import {
  CreateProfileParams,
  LoginUserData,
  Profile,
  RegisterParams,
  VerifyCodeParams,
  VerifyCodeResult,
} from './types';

export async function sendEmail(email: string) {
  const res = await client.post('/auth/email', {email});

  return res.data;
}

export async function verifyCode(params: VerifyCodeParams) {
  const res = await client.post<VerifyCodeResult>('/auth/email/verify', params);

  return res.data;
}

export async function register({type, ...body}: RegisterParams) {
  const res = await client.post<LoginUserData>(`/auth/register/${type}`, body);

  return res.data;
}

export async function checkAbleNickname(nickname: string) {
  const res = await client.post('/auth/check-nickname', {nickname});

  return res.data;
}

export async function createProfile(params: CreateProfileParams) {
  const res = await client.post<Profile>('/auth/profile', params);

  return res.data;
}

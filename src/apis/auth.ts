import client from './@client';

export async function sendEmail(email: string) {
  const res = await client.post('/auth/email', {email});

  return res.data;
}

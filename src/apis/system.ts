import client from './@client';

export async function createFeedback(content: string) {
  const res = await client.post('/system/feedback', {content});

  return res.data;
}

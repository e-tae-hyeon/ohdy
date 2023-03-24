export type VerifyCodeParams = {
  email: string;
  code: number;
};

export type VerifyCodeResult = {
  user: User;
  tokens: Tokens;
} | null;

export type User = {
  id: number;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type Gender = 'female' | 'male';

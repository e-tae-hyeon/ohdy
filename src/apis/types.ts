export type VerifyCodeParams = {
  email: string;
  code: number;
};

export type VerifyCodeResult = LoginUserData | null;

export type LoginUserData = {
  user: User;
  tokens: Tokens;
};

export type RegisterParams = LocalRegisterParams | SocialRegisterParams;

export type LocalRegisterParams = {
  type: 'local';
  email: string;
};

export type SocialRegisterParams = {
  type: 'social';
  socialId: string;
  provider: SocialProvider;
};

export type SocialProvider = 'Apple' | 'Kakao';

export type User = {
  id: number;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type Gender = 'female' | 'male';

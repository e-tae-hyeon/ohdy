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

export type CreateProfileParams = {
  nickname: string;
  gender: Gender;
  brithDate: string;
  keywords: string[];
};

export type Profile = {
  userId: number;
  nickname: string;
  gender: Gender;
  brithDate: string;
};

export type Place = {
  id: number;
  name: string;
  description: string;
  coverImages: PlaceImage[];
  category: Category;
  location: Location;
};

export type Category = {
  id: number;
  name: string;
  parentId?: number;
};

export type Location = {
  id: number;
  name: string;
  parentId?: number;
};

export type PlaceImage = {
  id: number;
  uri: string;
};

export type GetRecommandedPlacesParams = {
  locations?: string[];
  maxHeadCount?: number;
  minPrice?: number;
  maxPrice?: number;
  relationship?: string;
  categories: string[];
};

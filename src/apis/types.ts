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

export type SocialAuthResult = SocialLoginResult | SocialRegisterResult;

export type SocialLoginResult = {
  type: 'login';
  data: LoginUserData;
};

export type SocialRegisterResult = {
  type: 'register';
  data: UserKakao;
};

export type SocialProvider = 'apple' | 'kakao';

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

export type PlaceSummary = {
  id: number;
  name: string;
  description: string;
  coverImages: PlaceImage[];
  category: Category;
  location: Location;
  isLiked: boolean;
};

export type Place = {
  id: number;
  name: string;
  description: string;
  locationId: number;
  categoryId: number;
  maxHeadCount: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  coverImages: PlaceImage[];
  infoImages: PlaceImage[];
  keywords: Keyword[];
  links: PlaceLink[];
  relationships: Relationship[];
  category: Category;
  location: Location;
  placeStat: PlaceStat;
  isLiked: boolean;
};

export type PlaceImage = {
  id: number;
  uri: string;
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

export type Keyword = {
  id: number;
  name: string;
};

export type PlaceLinkProvider = 'home' | 'naver' | 'instagram';

export type PlaceLink = {
  id: number;
  placeId: number;
  provider: PlaceLinkProvider;
  uri: string;
};

export type Relationship = {
  id: number;
  name: string;
};

export type PlaceStat = {
  likes: number;
  placeId: number;
  score: number;
  views: number;
};

export type GetRecommandedPlacesParams = {
  locations?: string[];
  maxHeadCount?: number;
  minPrice?: number;
  maxPrice?: number;
  relationship?: string;
  categories: string[];
};

export type GetPlacesParams = {
  cursor?: number;
  mode: PlacesOrderMode;
};

export type PlacesOrderMode = 'recent' | 'popular';

export type GetPlacesResult = {
  places: PlaceSummary[];
  pageInfo: PageInfo;
};

export type PageInfo = {
  endCursor: number | null;
  hasNextPage: boolean;
};

export type SearchPlacesByCategoryParams = {
  category: string;
  cursor?: number;
};

export type SearchPlacesParams = {
  keyword: string;
  cursor?: number;
};

export type UserKakao = {
  id: number;
  kakao_account: {
    brithday?: string;
    gender?: string;
    profile?: {
      nickname?: string;
    };
  };
};

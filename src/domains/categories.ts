export const categories = [
  '식당',
  '카페',
  '주점',
  '원데이클래스',
  '아트',
  '공연',
  '스튜디오',
  '팝업∙플래그십 스토어',
] as const;

export type ParentCategory = (typeof categories)[number];

export const subCategories: Record<ParentCategory, ReadonlyArray<string>> = {
  식당: [
    '한식',
    '양식',
    '일식',
    '중식',
    '아시안',
    '분식',
    '패스트푸드',
    '브런치',
    '뷔페',
    '오마카세',
    '파인다이닝',
  ] as const,
  카페: [
    '커피∙디저트',
    '베이커리',
    '찻집',
    '북카페',
    '재즈카페',
    '한옥카페',
    '아쿠아리움카페',
  ] as const,
  주점: ['와인∙칵테일바', '일반 주점', '이자카야'] as const,
  원데이클래스: [
    '드로잉',
    '반지공방',
    '가죽공방',
    '퍼스널컬러',
    '꽃꽂이',
    '기타',
  ] as const,
  아트: ['전시회', '체험 전시'] as const,
  공연: ['뮤지컬', '연극', '음악공연장'] as const,
  스튜디오: ['셀프 스튜디오', '사진관'] as const,
  '팝업∙플래그십 스토어': ['하이엔드', '더현대서울', '브랜드스토어'] as const,
};

export type SubCategory = {
  [key in ParentCategory]: (typeof subCategories)[key][number];
}[ParentCategory];

export const relationships = ['연인', '친구', '가족', '비즈니스'] as const;

export type Relationship = (typeof relationships)[number];

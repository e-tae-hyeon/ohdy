export const locations = ['서울'] as const;

export type ParentLocation = (typeof locations)[number];

export const subLocations: Record<ParentLocation, readonly string[]> = {
  서울: [
    '성수',
    '홍대',
    '연남',
    '이태원',
    '한남',
    '압구정',
    '신사',
    '익선',
    '합정',
    '망원',
  ] as const,
};

export type SubLocation = (typeof subLocations)[ParentLocation];

import {create} from 'zustand';

export const MIN_PRICE = 0;
export const MAX_PRICE = 300000;

type State = {
  locations: string[];
  maxHeadCount: number;
  price: {
    min: number;
    max: number;
  };
  relationship: string;
  categories: string[];
};

type Actions = {
  addLocation: (by: string) => void;
  removeLocation: (by: string) => void;

  setMaxHeadCount: (by: number) => void;
  setPrice: (by: {min: number; max: number}) => void;

  setRelationship: (by: string) => void;
  clearRelationship: () => void;

  addCategory: (by: string) => void;
  removeCategory: (by: string) => void;

  clearAll: () => void;
};

const initialData: State = {
  locations: [],
  maxHeadCount: 0,
  price: {
    min: MIN_PRICE,
    max: MAX_PRICE,
  },
  relationship: '',
  categories: [],
};

const usePlaceFilterStore = create<State & Actions>()(set => ({
  ...initialData,
  addLocation: by =>
    set(state => ({...state, locations: [...state.locations, by]})),
  removeLocation: by =>
    set(state => ({
      ...state,
      locations: state.locations.filter(location => location !== by),
    })),

  setMaxHeadCount: by => set(state => ({...state, maxHeadCount: by})),

  setPrice: by => set(state => ({...state, price: by})),

  setRelationship: by => set(state => ({...state, relationship: by})),
  clearRelationship: () =>
    set(state => ({...state, relationship: initialData.relationship})),

  addCategory: by =>
    set(state => ({...state, categories: [...state.categories, by]})),
  removeCategory: by =>
    set(state => ({
      ...state,
      categories: state.categories.filter(category => category !== by),
    })),

  clearAll: () => set(initialData),
}));

export default usePlaceFilterStore;

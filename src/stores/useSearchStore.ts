import {create} from 'zustand';

type State = {
  isSearched: boolean;
  isFoucsedSearchbar: boolean;
  keyword: string;
};

type Actions = {
  setIsSearched: (by: boolean) => void;
  clearIsSearched: () => void;

  setIsFocusedSearchbar: (by: boolean) => void;
  clearIsFocusedSearchbar: () => void;

  setKeyword: (by: string) => void;
  clearKeyword: () => void;
};

const initialState: State = {
  isSearched: false,
  isFoucsedSearchbar: false,
  keyword: '',
};

const useSearchStore = create<State & Actions>()(set => ({
  ...initialState,
  setIsSearched: by => set(state => ({...state, isSearched: by})),
  clearIsSearched: () =>
    set(state => ({...state, isSearched: initialState.isSearched})),

  setIsFocusedSearchbar: by =>
    set(state => ({...state, isFoucsedSearchbar: by})),
  clearIsFocusedSearchbar: () =>
    set(state => ({
      ...state,
      isFoucsedSearchbar: initialState.isFoucsedSearchbar,
    })),

  setKeyword: by => set(state => ({...state, keyword: by})),
  clearKeyword: () => set(state => ({...state, keyword: initialState.keyword})),
}));

export default useSearchStore;

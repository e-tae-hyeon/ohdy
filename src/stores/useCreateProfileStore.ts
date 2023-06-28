import {create} from 'zustand';

type State = {
  nickname: string;
  keywords: string[];
};

type Actions = {
  setNickname: (by: string) => void;

  addKeyword: (by: string) => void;
  removeKeyword: (by: string) => void;

  clear: () => void;
};

const initialState: State = {
  nickname: '',
  keywords: [],
};

const useCreateProfileStore = create<State & Actions>()(set => ({
  ...initialState,
  setNickname: by => set(state => ({...state, nickname: by})),

  addKeyword: by =>
    set(state => ({...state, keywords: [...state.keywords, by]})),
  removeKeyword: by =>
    set(state => ({
      ...state,
      keywords: state.keywords.filter(keyword => keyword !== by),
    })),

  clear: () => set(initialState),
}));

export default useCreateProfileStore;

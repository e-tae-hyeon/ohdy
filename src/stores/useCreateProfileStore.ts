import {Gender} from 'apis/types';
import {create} from 'zustand';

type State = {
  brithDate: Date;
  gender: Gender | undefined;
  nickname: string;
};

type Actions = {
  setBrithDate: (by: Date) => void;
  setGender: (by: Gender) => void;
  setNickname: (by: string) => void;

  clear: () => void;
};

const initialState: State = {
  brithDate: new Date(),
  gender: undefined,
  nickname: '',
};

const useCreateProfileStore = create<State & Actions>()(set => ({
  ...initialState,
  setBrithDate: by => set(state => ({...state, brithDate: by})),
  setGender: by => set(state => ({...state, gender: by})),
  setNickname: by => set(state => ({...state, nickname: by})),

  clear: () => set(initialState),
}));

export default useCreateProfileStore;

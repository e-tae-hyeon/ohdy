import {Gender} from 'apis/types';
import {create} from 'zustand';

type State = {
  email: string;
  brithDate: Date;
  gender: Gender | undefined;
};

type Actions = {
  setEmail: (by: string) => void;
  setBrithDate: (by: Date) => void;
  setGender: (by: Gender) => void;

  clearAll: () => void;
};

const initialState: State = {
  email: '',
  brithDate: new Date(),
  gender: undefined,
};

const useAuthStore = create<State & Actions>()(set => ({
  ...initialState,
  setEmail: by => set(state => ({...state, email: by})),
  setBrithDate: by => set(state => ({...state, brithDate: by})),
  setGender: by => set(state => ({...state, gender: by})),

  clearAll: () => set(initialState),
}));

export default useAuthStore;

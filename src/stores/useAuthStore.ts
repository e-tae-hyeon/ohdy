import {Gender} from 'apis/types';
import {create} from 'zustand';

type State = {
  registerType: RegisterType | undefined;
  email: string;
  isVisiblePolicySheet: boolean;

  brithDate: Date;
  gender: Gender | undefined;
  nickname: string;
};

type Actions = {
  setRegisterType: (by: RegisterType) => void;

  setEmail: (by: string) => void;

  openPolicySheet: () => void;
  closePolicySheet: () => void;

  setBrithDate: (by: Date) => void;
  setGender: (by: Gender) => void;
  setNickname: (by: string) => void;

  clearAll: () => void;
};

const initialState: State = {
  registerType: undefined,

  email: '',
  isVisiblePolicySheet: false,

  brithDate: new Date(),
  gender: undefined,
  nickname: '',
};

const useAuthStore = create<State & Actions>()(set => ({
  ...initialState,
  setRegisterType: by => set(state => ({...state, registerType: by})),

  setEmail: by => set(state => ({...state, email: by})),

  openPolicySheet: () => set(state => ({...state, isVisiblePolicySheet: true})),
  closePolicySheet: () =>
    set(state => ({...state, isVisiblePolicySheet: false})),

  setBrithDate: by => set(state => ({...state, brithDate: by})),
  setGender: by => set(state => ({...state, gender: by})),
  setNickname: by => set(state => ({...state, nickname: by})),

  clearAll: () => set(initialState),
}));

export default useAuthStore;

export type RegisterType = 'local' | 'social';

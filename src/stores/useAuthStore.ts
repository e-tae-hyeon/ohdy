import {SocialProvider, UserKakao} from 'apis/types';
import {create} from 'zustand';

type State = {
  registerType: RegisterType | undefined;
  email: string;
  socialRegisterData: {provider: SocialProvider; socialId: string} | undefined;
  socialUserData: UserKakao | undefined;
  isVisiblePolicySheet: boolean;
};

type Actions = {
  setRegisterType: (by: RegisterType) => void;

  setEmail: (by: string) => void;

  setSocialRegisterData: (by: {
    provider: SocialProvider;
    socialId: string;
  }) => void;
  setSocialUserData: (by: UserKakao) => void;

  openPolicySheet: () => void;
  closePolicySheet: () => void;

  clearAll: () => void;
};

const initialState: State = {
  registerType: undefined,
  email: '',
  socialRegisterData: undefined,
  socialUserData: undefined,
  isVisiblePolicySheet: false,
};

const useAuthStore = create<State & Actions>()(set => ({
  ...initialState,
  setRegisterType: by => set(state => ({...state, registerType: by})),

  setEmail: by => set(state => ({...state, email: by})),

  setSocialRegisterData: by =>
    set(state => ({...state, socialRegisterData: by})),
  setSocialUserData: by => set(state => ({...state, socialUserData: by})),

  openPolicySheet: () => set(state => ({...state, isVisiblePolicySheet: true})),
  closePolicySheet: () =>
    set(state => ({...state, isVisiblePolicySheet: false})),

  clearAll: () => set(initialState),
}));

export default useAuthStore;

export type RegisterType = 'local' | 'social';

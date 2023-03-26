import {create} from 'zustand';

type State = {
  registerType: RegisterType | undefined;
  email: string;
  isVisiblePolicySheet: boolean;
};

type Actions = {
  setRegisterType: (by: RegisterType) => void;

  setEmail: (by: string) => void;

  openPolicySheet: () => void;
  closePolicySheet: () => void;

  clearAll: () => void;
};

const initialState: State = {
  registerType: undefined,

  email: '',
  isVisiblePolicySheet: false,
};

const useAuthStore = create<State & Actions>()(set => ({
  ...initialState,
  setRegisterType: by => set(state => ({...state, registerType: by})),

  setEmail: by => set(state => ({...state, email: by})),

  openPolicySheet: () => set(state => ({...state, isVisiblePolicySheet: true})),
  closePolicySheet: () =>
    set(state => ({...state, isVisiblePolicySheet: false})),

  clearAll: () => set(initialState),
}));

export default useAuthStore;

export type RegisterType = 'local' | 'social';

import {create} from 'zustand';

type State = {
  email: string;
};

type Actions = {
  setEmail: (by: string) => void;

  clearAll: () => void;
};

const initialState: State = {
  email: '',
};

const useAuthStore = create<State & Actions>()(set => ({
  ...initialState,
  setEmail: by => set(state => ({...state, email: by})),

  clearAll: () => set(initialState),
}));

export default useAuthStore;

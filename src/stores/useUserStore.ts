import {User} from 'apis/types';
import {create} from 'zustand';

type State = {
  user: User | undefined;
};

type Actions = {
  setUser: (by: User) => void;

  clear: () => void;
};

const initialState: State = {
  user: undefined,
};

const useUserStore = create<State & Actions>()(set => ({
  ...initialState,
  setUser: by => set(state => ({...state, user: by})),
  clear: () => set(initialState),
}));

export default useUserStore;

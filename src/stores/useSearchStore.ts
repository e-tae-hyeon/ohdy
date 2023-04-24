import {create} from 'zustand';

type State = {
  search: string;
};

type Actions = {
  setSearch: (by: string) => void;
};

const initialState: State = {
  search: '',
};

const useSearchStore = create<State & Actions>()(set => ({
  ...initialState,
  setSearch: by => set(state => ({...state, search: by})),
}));

export default useSearchStore;

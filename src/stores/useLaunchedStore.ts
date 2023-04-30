import {create} from 'zustand';

type State = {
  isFirstLaunched: boolean;
  isVisibleHowToUse: boolean;
};

type Actions = {
  setIsFirstLaunched: (by: boolean) => void;
  setIsVisibleHowToUse: (by: boolean) => void;
};

const initialState: State = {
  isFirstLaunched: true,
  isVisibleHowToUse: false,
};

const useLaunchedStore = create<State & Actions>()(set => ({
  ...initialState,
  setIsFirstLaunched: by => set(state => ({...state, isFirstLaunched: by})),
  setIsVisibleHowToUse: by => set(state => ({...state, isVisibleHowToUse: by})),
}));

export default useLaunchedStore;

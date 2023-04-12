import {create} from 'zustand';

type State = {
  currentOpendName: string;
};

type Actions = {
  setCurrentOpendName: (by: string) => void;
  clearCurrentOpendName: () => void;
};

const initialState: State = {
  currentOpendName: '',
};

const useAccordionStore = create<State & Actions>()(set => ({
  ...initialState,
  setCurrentOpendName: by => set(state => ({...state, currentOpendName: by})),
  clearCurrentOpendName: () =>
    set(state => ({...state, currentOpendName: initialState.currentOpendName})),
}));

export default useAccordionStore;

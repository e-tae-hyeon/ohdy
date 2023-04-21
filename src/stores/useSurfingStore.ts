import {PlacesOrderMode} from 'apis/types';
import {create} from 'zustand';

type State = {
  orderMode: PlacesOrderMode;
};

type Actions = {
  setOrderMode: (by: PlacesOrderMode) => void;
};

const initialState: State = {
  orderMode: 'recent',
};

const useSurfingStore = create<State & Actions>()(set => ({
  ...initialState,
  setOrderMode: by => set(state => ({...state, orderMode: by})),
}));

export default useSurfingStore;

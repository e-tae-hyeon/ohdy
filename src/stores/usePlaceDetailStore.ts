import {create} from 'zustand';

type State = {
  isShownImageSwiper: boolean;
};

type Actions = {
  setIsShownImageSwiper: (by: boolean) => void;
};

const initialState: State = {
  isShownImageSwiper: false,
};

const usePlaceDetailStore = create<State & Actions>()(set => ({
  ...initialState,
  setIsShownImageSwiper: by =>
    set(state => ({...state, isShownImageSwiper: by})),
}));

export default usePlaceDetailStore;

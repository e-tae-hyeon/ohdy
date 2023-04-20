import {PlaceStat} from 'apis/types';
import {create} from 'zustand';

type OverridablePlace = {
  isLiked: boolean;
  placeStats?: PlaceStat;
};

type State = {
  overrides: {
    [key: number]: OverridablePlace | undefined;
  };
};

type Actions = {
  set: ({
    placeId,
    overridePlace,
  }: {
    placeId: number;
    overridePlace: OverridablePlace;
  }) => void;
};

const initialState: State = {
  overrides: {},
};

const usePlaceOverrideStore = create<State & Actions>()(set => ({
  ...initialState,
  set: by =>
    set(state => ({
      ...state,
      overrides: {...state.overrides, [by.placeId]: by.overridePlace},
    })),
}));

export default usePlaceOverrideStore;

export function usePlaceOverrideById(placeId: number) {
  const overrides = usePlaceOverrideStore(store => store.overrides);
  return overrides[placeId];
}

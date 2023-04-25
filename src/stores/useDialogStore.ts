import {DialogConfig} from 'components/@base/Dialog';
import {create} from 'zustand';

type State = {
  isVisible: boolean;
  config: DialogConfig | undefined;
};

type Actions = {
  openDialog: () => void;
  closeDialog: () => void;
  setConfig: (by: DialogConfig) => void;
  clearConfig: () => void;
};

const initialState: State = {
  isVisible: false,
  config: undefined,
};

const useDialogStore = create<State & Actions>()(set => ({
  ...initialState,
  openDialog: () => set(state => ({...state, isVisible: true})),
  closeDialog: () => set(state => ({...state, isVisible: false})),
  setConfig: by => set(state => ({...state, config: by})),
  clearConfig: () => set(state => ({...state, config: initialState.config})),
}));

export default useDialogStore;

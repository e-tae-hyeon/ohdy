import React from 'react';
import Modal from 'react-native-modal';

type BottomSheetProps = {
  isVisible: boolean;
  children: React.ReactNode;
};

function BottomSheet({isVisible, children}: BottomSheetProps) {
  return (
    <Modal isVisible={isVisible} className="justify-end m-0 bg-white">
      {children}
    </Modal>
  );
}

export default BottomSheet;

import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

type BottomSheetProps = {
  isVisible: boolean;
  onBackDrop?: () => void;
  children: React.ReactNode;
};

function BottomSheet({isVisible, onBackDrop, children}: BottomSheetProps) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onBackDrop}
      onBackdropPress={onBackDrop}
      className="justify-end m-0">
      <View className="bg-white rounded-t-2xl">{children}</View>
    </Modal>
  );
}

export default BottomSheet;

import AppText from 'components/@base/AppText';
import React from 'react';
import {Pressable} from 'react-native';

type ActionCellProps = {
  label: string;
  onPress: () => void;
};

function ActionCell({label, onPress}: ActionCellProps) {
  return (
    <Pressable onPress={onPress} className="p-4">
      <AppText>{label}</AppText>
    </Pressable>
  );
}

export default ActionCell;

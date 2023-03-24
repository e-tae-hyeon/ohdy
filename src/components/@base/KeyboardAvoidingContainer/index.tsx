import React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';

type KeyboardAvoidingContainerProps = {
  children: React.ReactNode;
};

function KeyboardAvoidingContainer({children}: KeyboardAvoidingContainerProps) {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1">
      {children}
    </KeyboardAvoidingView>
  );
}

export default KeyboardAvoidingContainer;

import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

type KeyboardAvoidingContainerProps = {
  children: React.ReactNode;
};

function KeyboardAvodingContainer({children}: KeyboardAvoidingContainerProps) {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : undefined}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {children}
    </KeyboardAvoidingView>
  );
}

export default KeyboardAvodingContainer;

import React from 'react';
import {TextInput} from 'react-native';

type FeedbackInputProps = {
  value: string;
  onChange: (by: string) => void;
};

function FeedbackInput({value, onChange}: FeedbackInputProps) {
  return (
    <TextInput
      placeholder="피드백 작성"
      value={value}
      onChangeText={onChange}
      multiline
      className="px-4 py-6 bg-neutral-100 rounded-2xl min-h-[320]"
      style={{fontFamily: 'Pretendard-Medium', fontSize: 16}}
    />
  );
}

export default FeedbackInput;

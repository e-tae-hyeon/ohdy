import AppText from 'components/@base/AppText';
import React from 'react';
import {View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

type VerifyCodeInputProps = {
  value: string;
  onChangeText: (by: string) => void;
};

function VerifyCodeInput({value, onChangeText}: VerifyCodeInputProps) {
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeText,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={onChangeText}
      autoFocus
      cellCount={4}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <View
          className="items-center justify-center h-10 p-2 border w-11 border-neutral-400 rounded-2xl"
          onLayout={getCellOnLayoutHandler(index)}
          key={index}>
          <AppText align="center">
            {symbol || (isFocused ? <Cursor /> : null)}{' '}
          </AppText>
        </View>
      )}
    />
  );
}

export default VerifyCodeInput;

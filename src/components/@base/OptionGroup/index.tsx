import React from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import AppText, {TypoStyle} from '../AppText';

type OptionGroupProps<T> = {
  options: T[];
  selected: T | undefined;
  pressOption: (by: T) => void;
  optionCellStyle?: ViewStyle;
  optionTypoStyle?: TypoStyle;
  selectedCellStyle?: ViewStyle;
  selectedTypoColor?: string;
  direction?: 'column' | 'row';
};

function OptionGroup<T extends {label: string; value: any}>({
  options,
  selected,
  pressOption,
  optionCellStyle,
  optionTypoStyle,
  selectedCellStyle,
  selectedTypoColor,
  direction = 'row',
}: OptionGroupProps<T>) {
  const handlePress = (by: T) => {
    pressOption(by);
  };

  return (
    <View style={{flexDirection: direction, gap: 8}}>
      {options.map(option => (
        <Pressable
          onPress={() => pressOption(option)}
          style={[
            optionCellStyle,
            option === selected ? selectedCellStyle : undefined,
          ]}
          className="flex-1"
          key={option.value}>
          <AppText
            typeStyle={optionTypoStyle}
            color={option === selected ? selectedTypoColor : undefined}
            align="center">
            {option.label}
          </AppText>
        </Pressable>
      ))}
    </View>
  );
}

export default OptionGroup;

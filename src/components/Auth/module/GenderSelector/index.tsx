import {Gender} from 'apis/types';
import colors from 'common/styles/colors';
import OptionGroup from 'components/@base/OptionGroup';
import React from 'react';

type GenderSelectorProps = {
  selected: Gender | undefined;
  onSelect: (by: Gender) => void;
};

function GenderSelector({selected, onSelect}: GenderSelectorProps) {
  const options = [
    {label: '여성', value: 'female'},
    {label: '남성', value: 'male'},
  ];

  return (
    <OptionGroup
      options={options}
      selected={options.find(option => option.value === selected)}
      pressOption={({value}) => onSelect(value as Gender)}
      optionCellStyle={{
        padding: 8,
        borderWidth: 1,
        borderColor: colors.gray[200],
        borderRadius: 16,
      }}
      selectedCellStyle={{
        backgroundColor: colors.black,
        borderWidth: 0,
      }}
      selectedTypoColor={colors.white}
    />
  );
}

export default GenderSelector;

import colors from 'common/styles/colors';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {TextInput, View} from 'react-native';

type SearchbarProps = {
  value: string;
  onChange: (by: string) => void;
  onSubmit: () => void;
};

function Searchbar({value, onChange, onSubmit}: SearchbarProps) {
  return (
    <View className="flex-row flex-1 px-4 py-2 bg-neutral-100 rounded-2xl">
      <TextInput
        placeholder="검색어를 입력해 주세요."
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        placeholderTextColor={colors.gray[400]}
        style={{fontFamily: 'Pretendard-Medium', fontSize: 16}}
        className="flex-1"
      />
      <SvgIcon name="search" color={colors.gray[400]} />
    </View>
  );
}

export default Searchbar;

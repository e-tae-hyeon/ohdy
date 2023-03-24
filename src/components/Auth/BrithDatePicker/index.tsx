import AppText from 'components/@base/AppText';
import SvgIcon from 'components/@base/SvgIcon';
import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

type BrithDatePickerProps = {
  date: Date;
  setDate: (by: Date) => void;
};

function BrithDatePicker({date, setDate}: BrithDatePickerProps) {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setVisible(true)}
        className="flex-row items-center justify-between px-4 py-2 border border-neutral-400 rounded-2xl">
        <View className="items-center justify-center flex-1">
          <AppText>
            {date ? date.toLocaleDateString('ko-kr') : '생년월일'}
          </AppText>
        </View>
        <SvgIcon name="chevronDown" />
      </Pressable>
      <DatePicker
        title={'생년월일'}
        modal
        open={isVisible}
        date={date}
        onConfirm={date => {
          setDate(date);
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        confirmText={'완료'}
        cancelText="취소"
        locale="ko-kr"
        mode="date"
        androidVariant="iosClone"
        maximumDate={new Date()}
      />
    </>
  );
}

export default BrithDatePicker;

import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import React from 'react';
import {View} from 'react-native';

type EmptyNoticeProps = {
  message: string;
};

function EmptyNotice({message}: EmptyNoticeProps) {
  return (
    <View className="items-center justify-center flex-1">
      <AppText typoStyle="Action" color={colors.gray[400]}>
        {message}
      </AppText>
    </View>
  );
}

export default EmptyNotice;

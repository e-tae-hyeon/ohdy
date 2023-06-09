import AppText from 'components/@base/AppText';
import useMyProfile from 'hooks/useMyProfile';
import React from 'react';
import {View} from 'react-native';

function UserInfo() {
  const myProfile = useMyProfile();

  return (
    <View className="px-8 py-12">
      <AppText typoStyle="H3">{myProfile?.nickname}님</AppText>
    </View>
  );
}

export default UserInfo;

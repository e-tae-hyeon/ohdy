import ActionCell from 'components/User/module/ActionCell';
import React from 'react';
import {Linking, View} from 'react-native';
import {PRIVACY_POLICY_URI, TERM_OF_USE_URI} from 'common/constants/string';

function UserPolicies() {
  const handleLink = (uri: string) => {
    Linking.openURL(uri);
  };

  return (
    <View className="py-4">
      <ActionCell
        label="개인정보 처리방침"
        onPress={() => handleLink(PRIVACY_POLICY_URI)}
      />
      <ActionCell
        label="서비스 이용약관"
        onPress={() => handleLink(TERM_OF_USE_URI)}
      />
    </View>
  );
}

export default UserPolicies;

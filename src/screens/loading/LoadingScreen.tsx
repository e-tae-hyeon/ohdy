import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import Logotypo from 'components/@base/Logotypo';
import Layout from 'components/Global/template/Layout';
import React from 'react';
import {View} from 'react-native';

function LoadingScreen() {
  return (
    <Layout>
      <View className="items-center justify-center flex-1 py-16">
        <View className="items-center justify-center flex-1">
          <Logotypo size="medium" />
        </View>
        <AppText typoStyle="Action" color={colors.gray[400]}>
          서버를 확인하고 있어요!
        </AppText>
      </View>
    </Layout>
  );
}

export default LoadingScreen;

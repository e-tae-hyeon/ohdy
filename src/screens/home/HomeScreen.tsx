import Logotypo from 'components/@base/Logotypo';
import Layout from 'components/Global/template/Layout';
import CurrentStatusDisplayer from 'components/Home/template/CurrentStatusDisplayer';
import HowToUseProvider from 'components/Home/template/HowToUseProvider';
import PlaceCarousel from 'components/Home/template/PlaceCarousel';
import PlaceFilter from 'components/Home/template/PlaceFilter';
import React from 'react';
import {View} from 'react-native';

function HomeScreen() {
  return (
    <Layout>
      <View className="px-4 py-2">
        <Logotypo size="small" />
      </View>
      <CurrentStatusDisplayer />
      <PlaceCarousel />
      <PlaceFilter />
      <HowToUseProvider />
    </Layout>
  );
}

export default HomeScreen;

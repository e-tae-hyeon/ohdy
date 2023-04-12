import Header from 'components/Global/template/Header';
import Layout from 'components/Global/template/Layout';
import CurretStatusDisplayer from 'components/Home/template/CurrentStatusDisplayer';
import PlaceCarousel from 'components/Home/template/PlaceCarousel';
import PlaceFilter from 'components/Home/template/PlaceFilter';
import React from 'react';

function HomeScreen() {
  return (
    <Layout>
      <Header title="ohdy" />
      <CurretStatusDisplayer />
      <PlaceCarousel />
      <PlaceFilter />
    </Layout>
  );
}

export default HomeScreen;

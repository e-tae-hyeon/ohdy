import Layout from 'components/Global/template/Layout';
import CategoryResultHeader from 'components/Surfing/template/CategoryResultHeader';
import CategoryResultPlaceList from 'components/Surfing/template/CategoryResultPlaceList';
import React from 'react';

function CategoryResultScreen() {
  return (
    <Layout>
      <CategoryResultHeader />
      <CategoryResultPlaceList />
    </Layout>
  );
}

export default CategoryResultScreen;

import Layout from 'components/Global/template/Layout';
import SearchHeader from 'components/Surfing/template/SearchHeader';
import SurfingCategories from 'components/Surfing/template/SurfingCategories';
import React from 'react';

function SearchScreen() {
  return (
    <Layout>
      <SearchHeader />
      <SurfingCategories />
    </Layout>
  );
}

export default SearchScreen;

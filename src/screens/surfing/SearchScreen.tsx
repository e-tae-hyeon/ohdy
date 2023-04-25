import Layout from 'components/Global/template/Layout';
import SearchHeader from 'components/Surfing/template/SearchHeader';
import SearchResult from 'components/Surfing/template/SearchResult';
import SurfingCategories from 'components/Surfing/template/SurfingCategories';
import React from 'react';

function SearchScreen() {
  return (
    <Layout>
      <SearchHeader />
      <SearchResult />
    </Layout>
  );
}

export default SearchScreen;

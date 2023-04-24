import FlexView from 'components/@base/FlexView';
import Back from 'components/Global/module/Back';
import Searchbar from 'components/Surfing/module/Searchbar';
import React from 'react';
import useSearchStore from 'stores/useSearchStore';

function SearchHeader() {
  const {search, setSearch} = useSearchStore();

  const handleChange = (by: string) => setSearch(by);

  return (
    <FlexView
      direction="row"
      gapSize="small"
      className="items-center px-2 py-4">
      <Back />
      <Searchbar value={search} onChange={handleChange} />
    </FlexView>
  );
}

export default SearchHeader;

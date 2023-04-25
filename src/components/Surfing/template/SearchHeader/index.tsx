import FlexView from 'components/@base/FlexView';
import Back from 'components/Global/module/Back';
import Searchbar from 'components/Surfing/module/Searchbar';
import useSearchPlaces from 'hooks/useSearchPlaces';
import React from 'react';
import useSearchStore from 'stores/useSearchStore';

function SearchHeader() {
  const {
    keyword,
    setKeyword,
    clearKeyword,
    setIsFocusedSearchbar,
    clearIsSearched,
    clearIsFocusedSearchbar,
  } = useSearchStore();
  const {fetchSearch} = useSearchPlaces(keyword);

  const handleChange = (by: string) => setKeyword(by);

  const handleSubmit = () => {
    fetchSearch();
    clearIsFocusedSearchbar();
  };

  const handlePressBack = () => {
    clearIsSearched();
    clearKeyword();
  };

  return (
    <FlexView
      direction="row"
      gapSize="small"
      className="items-center px-2 py-4">
      <Back onPress={handlePressBack} />
      <Searchbar
        value={keyword}
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
        onFocus={() => setIsFocusedSearchbar(true)}
      />
    </FlexView>
  );
}

export default SearchHeader;

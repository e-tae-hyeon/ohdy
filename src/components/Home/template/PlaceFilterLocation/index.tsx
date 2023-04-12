import colors from 'common/styles/colors';
import Accordion from 'components/@base/Accordion';
import AppText from 'components/@base/AppText';
import {subLocations} from 'domains/locations';
import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, Pressable} from 'react-native';
import usePlaceFilterStore from 'stores/usePlaceFilterStore';

function PlaceFilterLocation() {
  const {locations, addLocation, removeLocation} = usePlaceFilterStore();

  const preview =
    locations.length < 4
      ? locations.join(', ')
      : `${locations.slice(0, 3).join(', ')} 등 ${locations.length}개`;

  const handlePressLocation = (by: string) => {
    if (locations.includes(by)) removeLocation(by);
    else addLocation(by);
  };

  const renderItem: ListRenderItem<string> = useCallback(
    ({item}) => (
      <Pressable
        onPress={() => handlePressLocation(item)}
        className="items-center justify-center flex-1 p-4">
        <AppText
          color={locations.includes(item) ? colors.black : colors.gray[300]}>
          {item}
        </AppText>
      </Pressable>
    ),
    [locations, subLocations],
  );

  return (
    <Accordion name="location" label="지역" preview={preview} exclusive>
      <FlatList
        data={subLocations.서울}
        renderItem={renderItem}
        keyExtractor={item => item}
        numColumns={3}
        scrollEnabled={false}
      />
    </Accordion>
  );
}

export default PlaceFilterLocation;

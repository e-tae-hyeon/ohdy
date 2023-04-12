import colors from 'common/styles/colors';
import Accordion from 'components/@base/Accordion';
import AppText from 'components/@base/AppText';
import {Relationship, relationships} from 'domains/relationships';
import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, Pressable} from 'react-native';
import usePlaceFilterStore from 'stores/usePlaceFilterStore';

function PlaceFilterRelationship() {
  const {relationship, setRelationship, clearRelationship} =
    usePlaceFilterStore();

  const preview = relationship;

  const handlePressRelationship = (by: string) => {
    if (by !== relationship) setRelationship(by);
    else clearRelationship();
  };

  const renderItem: ListRenderItem<{label: string; value: string}> =
    useCallback(
      ({item}) => (
        <Pressable
          onPress={() => handlePressRelationship(item.value)}
          className="items-center justify-center flex-1 p-4">
          <AppText
            color={
              item.value === relationship ? colors.black : colors.gray[300]
            }>
            {item.label}
          </AppText>
        </Pressable>
      ),
      [relationships, relationship],
    );

  return (
    <Accordion name="relationships" label="관계" preview={preview} exclusive>
      <FlatList
        data={Object.values(relationsMap)}
        renderItem={renderItem}
        keyExtractor={item => item.value}
        numColumns={2}
        scrollEnabled={false}
      />
    </Accordion>
  );
}

export default PlaceFilterRelationship;

const relationsMap: Record<Relationship, {label: string; value: string}> = {
  친구: {
    label: '👯‍ 친구와 함께',
    value: '친구',
  },
  가족: {
    label: '👨‍👩‍👧‍ 가족과 함께',
    value: '가족',
  },
  연인: {
    label: '❤️ ‍연인과 함께',
    value: '연인',
  },
  비즈니스: {
    label: '💼 비즈니스',
    value: '비즈니스',
  },
};

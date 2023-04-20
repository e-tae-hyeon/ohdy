import Tag from 'components/@base/Tag';
import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

type PlaceDetailTagListProps = {
  tags: string[];
  tagStyle?: {bgColor?: string; textColor?: string};
};

function PlaceDetailTagList({tags, tagStyle}: PlaceDetailTagListProps) {
  const renderItem: ListRenderItem<string> = useCallback(
    ({item}) => (
      <Tag
        label={item}
        bgColor={tagStyle?.bgColor}
        textColor={tagStyle?.textColor}
      />
    ),
    [tags],
  );

  return (
    <FlatList
      data={tags}
      renderItem={renderItem}
      horizontal
      keyExtractor={item => item}
      ItemSeparatorComponent={() => <View className="px-2" />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 16}}
    />
  );
}

export default PlaceDetailTagList;

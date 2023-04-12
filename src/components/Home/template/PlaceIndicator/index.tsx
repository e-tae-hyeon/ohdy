import {Category, Place} from 'apis/types';
import PlaceIndicatorItem from 'components/Home/module/PlaceIndicatorItem';
import React, {useCallback, useEffect, useRef} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

type PlaceIndicatorProps = {
  categories: Category[];
  currentPlace: Place;
  onPressItem: (parentId: number) => void;
};

function PlaceIndicator({
  categories,
  currentPlace,
  onPressItem,
}: PlaceIndicatorProps) {
  const indicatorRef = useRef<FlatList<Category>>(null);
  const parentCategory = categories.find(
    item => item.id === currentPlace.category.parentId,
  );

  useEffect(() => {
    if (!parentCategory) return;
    if (!indicatorRef.current) return;

    indicatorRef.current.scrollToIndex({
      index: categories.findIndex(item => item.id === parentCategory.id),
      viewPosition: 0.5,
    });
  }, [parentCategory, indicatorRef.current]);

  const renderItem: ListRenderItem<Category> = useCallback(
    ({item}) => (
      <PlaceIndicatorItem
        categoryName={item.name}
        isSelected={item.id === parentCategory?.id}
        onPress={() => onPressItem(item.id)}
        key={item.id}
      />
    ),
    [categories],
  );

  return (
    <FlatList
      ref={indicatorRef}
      data={categories}
      renderItem={renderItem}
      horizontal
      ItemSeparatorComponent={() => <View className="px-2" />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 16,
        paddingHorizontal: 32,
        alignItems: 'center',
      }}
    />
  );
}

export default PlaceIndicator;

import React, {useCallback, useState} from 'react';
import {Pressable, View} from 'react-native';
import {
  ParentCategory,
  SubCategory,
  categories,
  subCategories,
} from 'domains/categories';
import SurfingCategoryItem from 'components/Surfing/module/SurfingCategoryItem';
import AppText from 'components/@base/AppText';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/types';

function SurfingCategories() {
  const [selectedParentCategory, setSelectedParentCategory] =
    useState<ParentCategory>(categories[0]);
  const {navigate} = useNavigation<RootStackNavigationProp>();

  const handlePressParentCategory = (by: ParentCategory) =>
    setSelectedParentCategory(by);

  const handlePressChildeCategory = (by: SubCategory) => {
    navigate('CategoryResult', {category: by});
  };

  const renderItem: ListRenderItem<string> = useCallback(
    ({item}) => (
      <Pressable
        onPress={() => handlePressChildeCategory(item)}
        className="flex-1 px-4 py-6">
        <AppText typoStyle="B2">{item}</AppText>
      </Pressable>
    ),
    [selectedParentCategory],
  );

  return (
    <View className="flex-row flex-1 bg-neutral-50">
      <View className="border-r border-neutral-200 w-[40vw] h-screen bg-white">
        {categories.map(parent => (
          <SurfingCategoryItem
            label={parent}
            isSelected={parent === selectedParentCategory}
            onPress={() => handlePressParentCategory(parent)}
            key={parent}
          />
        ))}
      </View>
      <FlashList
        data={subCategories[selectedParentCategory]}
        renderItem={renderItem}
        numColumns={2}
        estimatedItemSize={50}
        scrollEnabled={false}
      />
    </View>
  );
}

export default SurfingCategories;

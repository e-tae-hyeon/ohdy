import colors from 'common/styles/colors';
import Accordion from 'components/@base/Accordion';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import SvgIcon from 'components/@base/SvgIcon';
import {ParentCategory} from 'domains/categories';
import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, Pressable} from 'react-native';
import usePlaceFilterStore from 'stores/usePlaceFilterStore';

function PlaceFilterCategories() {
  const {categories, addCategory, removeCategory} = usePlaceFilterStore();

  const preview =
    categories.length < 3
      ? categories.join(', ')
      : `${categories.slice(0, 2).join(', ')} 등 ${categories.length}개 `;

  const handlePressCategory = (by: string) => {
    if (categories.includes(by)) removeCategory(by);
    else addCategory(by);
  };

  const renderItem: ListRenderItem<{label: string; icon: any}> = useCallback(
    ({item}) => (
      <Pressable
        onPress={() => handlePressCategory(item.label)}
        className="items-center justify-center flex-1 py-4">
        <FlexView className="items-center justify-center">
          <SvgIcon
            name={item.icon}
            size={24}
            opacity={categories.includes(item.label) ? 1 : 0.2}
          />
          <AppText
            align="center"
            color={
              categories.includes(item.label) ? colors.black : colors.gray[300]
            }>
            {item.label}
          </AppText>
        </FlexView>
      </Pressable>
    ),
    [categories],
  );

  return (
    <Accordion
      name="categories"
      label="가고 싶은 곳 *"
      preview={preview}
      exclusive>
      <FlatList
        data={Object.values(categoriesMap)}
        renderItem={renderItem}
        keyExtractor={item => item.label}
        numColumns={3}
        scrollEnabled={false}
      />
    </Accordion>
  );
}

export default PlaceFilterCategories;

const categoriesMap: Record<ParentCategory, {label: string; icon: any}> = {
  식당: {
    icon: 'restaurant',
    label: '식당',
  },
  카페: {
    icon: 'cafe',
    label: '카페',
  },
  주점: {
    icon: 'drink',
    label: '주점',
  },
  원데이클래스: {
    icon: 'art',
    label: '원데이클래스',
  },
  아트: {
    icon: 'art',
    label: '아트',
  },
  공연: {
    icon: 'show',
    label: '공연',
  },
  스튜디오: {
    icon: 'camera',
    label: '스튜디오',
  },
  '팝업∙플래그십 스토어': {
    icon: 'store',
    label: '팝업∙플래그십 스토어',
  },
};

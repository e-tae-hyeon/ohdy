import {useRoute} from '@react-navigation/native';
import ActionsHeader from 'components/Global/template/ActionsHeader';
import {CategoryResultScreenRouteProp} from 'navigations/RootStack/types';
import React from 'react';

function CategoryResultHeader() {
  const {
    params: {category},
  } = useRoute<CategoryResultScreenRouteProp>();

  return <ActionsHeader title={category} />;
}

export default CategoryResultHeader;

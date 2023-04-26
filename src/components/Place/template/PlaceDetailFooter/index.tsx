import {useNavigation, useRoute} from '@react-navigation/native';
import PlaceDetailLikeBtn from 'components/Place/module/PlaceDetailLikeBtn';
import useLikePlaceManager from 'hooks/useLikePlaceManager';
import usePlace from 'hooks/usePlace';
import useToast from 'hooks/useToast';
import {MainTabNavigationProp} from 'navigations/MainTab/types';
import {PlaceDetailScreenRouteProp} from 'navigations/RootStack/types';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePlaceOverrideById} from 'stores/usePlaceOverrideStore';

function PlaceDetailFooter() {
  const {
    params: {id},
  } = useRoute<PlaceDetailScreenRouteProp>();
  const {bottom} = useSafeAreaInsets();
  const {place} = usePlace(id);
  const placeOverride = usePlaceOverrideById(id);
  const {like, unlike} = useLikePlaceManager();
  const {showToast, hideToast} = useToast();
  const {navigate} = useNavigation<MainTabNavigationProp>();

  if (!place) return null;

  const isLiked = placeOverride?.isLiked ?? place.isLiked;

  const handlePressLike = () => {
    if (isLiked) {
      unlike(id);
      hideToast();
    } else {
      like(id);
      showToast({
        type: 'success',
        message: '좋아하는 장소에 추가되었어요.',
        onPress: () => {
          hideToast();
          navigate('Liked');
        },
      });
    }
  };

  return (
    <View
      className="px-8 py-4 border-t border-neutral-200"
      style={{paddingBottom: bottom + 16}}>
      <PlaceDetailLikeBtn onPress={handlePressLike} isLiked={isLiked} />
    </View>
  );
}

export default PlaceDetailFooter;

import {PlaceSummary} from 'apis/types';
import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import Tag from 'components/@base/Tag';
import React, {useCallback} from 'react';
import {ImageBackground, Pressable, View} from 'react-native';
import HeartIcon from '../HeartIcon';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from 'navigations/RootStack/types';

type PlaceCardProps = {
  placeSummary: PlaceSummary;
};

function PlaceCard({placeSummary}: PlaceCardProps) {
  const {id, coverImages, category, name, location, isLiked} = placeSummary;

  const {navigate} = useNavigation<RootStackNavigationProp>();

  const handlePress = useCallback(() => {
    navigate('PlaceDetail', {id});
  }, [id]);

  return (
    <View className="p-2">
      <Pressable onPress={handlePress}>
        <FlexView gapSize="small">
          <ImageBackground
            source={{uri: coverImages[0].uri}}
            imageStyle={{borderRadius: 8}}
            className="justify-between w-full aspect-square rounded-2xl">
            <View className="p-2">
              <HeartIcon isLiked={isLiked} animated={false} />
            </View>
            <View className="flex-row justify-end p-2">
              <Tag
                label={category.name}
                bgColor={colors.black}
                textColor={colors.white}
              />
            </View>
          </ImageBackground>
          <FlexView gapSize="tiny">
            <AppText>{name}</AppText>
            <AppText typoStyle="Caption" color={'#818CF8'}>
              {location.name}
            </AppText>
          </FlexView>
        </FlexView>
      </Pressable>
    </View>
  );
}

export default React.memo(PlaceCard);

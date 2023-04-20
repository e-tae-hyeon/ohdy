import {PlaceLink, PlaceLinkProvider} from 'apis/types';
import AppText from 'components/@base/AppText';
import React from 'react';
import {Linking, Pressable, View} from 'react-native';

type PlaceDetailLinkListItemProps = {
  link: PlaceLink;
};

function PlaceDetailLinkListItem({link}: PlaceDetailLinkListItemProps) {
  const {provider, uri} = link;

  const handlePressLink = () => {
    Linking.openURL(uri);
  };

  return (
    <Pressable onPress={handlePressLink} className="self-start border-b">
      <AppText>{providerLabelMap[provider]}</AppText>
    </Pressable>
  );
}

export default PlaceDetailLinkListItem;

const providerLabelMap: Record<PlaceLinkProvider, string> = {
  home: '홈페이지',
  naver: '네이버 지도',
  instagram: '인스타그램',
};

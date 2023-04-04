import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexView from 'components/@base/FlexView';
import React from 'react';
import {View} from 'react-native';

type GuideTextProps = {
  title: string | string[];
  description?: string | string[];
  padding?: 'y' | 'b';
};

function GuideText({title, description, padding = 'y'}: GuideTextProps) {
  const isArrTitle = Array.isArray(title);
  const isArrDescription = Array.isArray(description);

  return (
    <FlexView gapSize="small" className={padding === 'y' ? 'py-14' : 'pb-14'}>
      <View>
        {isArrTitle ? (
          title.map(txt => (
            <View key={txt}>
              <AppText typoStyle="H3">{txt}</AppText>
            </View>
          ))
        ) : (
          <AppText typoStyle="H3">{title}</AppText>
        )}
      </View>
      {description &&
        (isArrDescription ? (
          description.map(txt => (
            <View key={txt}>
              <AppText typoStyle="B2" color={colors.gray[400]}>
                {txt}
              </AppText>
            </View>
          ))
        ) : (
          <AppText typoStyle="B2" color={colors.gray[400]}>
            {description}
          </AppText>
        ))}
    </FlexView>
  );
}

export default GuideText;

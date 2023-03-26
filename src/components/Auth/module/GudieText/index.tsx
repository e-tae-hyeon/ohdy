import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import FlexContainer from 'components/@base/FlexContainer';
import React from 'react';
import {View} from 'react-native';

type GuideTextProps = {
  title: string | string[];
  description?: string | string[];
};

function GuideText({title, description}: GuideTextProps) {
  const isArrTitle = Array.isArray(title);
  const isArrDescription = Array.isArray(description);

  return (
    <FlexContainer gapSize="small" className="py-14">
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
    </FlexContainer>
  );
}

export default GuideText;

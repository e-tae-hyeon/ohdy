import {useMutation, useQueryClient} from '@tanstack/react-query';
import {createProfile} from 'apis/auth';
import Btn from 'components/@base/Btn';
import FlexView from 'components/@base/FlexView';
import GuideText from 'components/Auth/module/GudieText';
import KeywordBtn from 'components/Auth/module/KeywordBtn';
import {KeywordShort, keywordShorts, profileKeywordMap} from 'domains/keywords';
import useDisabled from 'hooks/useDisabled';
import useToast from 'hooks/useToast';
import React, {useState} from 'react';
import {View} from 'react-native';
import useCreateProfileStore from 'stores/useCreateProfileStore';
import {getErrorMessage} from 'utils/error';
import {getFormatDate} from 'utils/format';

function KeywordsForm() {
  const queryClient = useQueryClient();
  const {showToast} = useToast();
  const {brithDate, gender, nickname, keywords, addKeyword, removeKeyword} =
    useCreateProfileStore();
  const [checkedLabels, setCheckedLabels] = useState<string[]>([]);
  const disabled = useDisabled([checkedLabels.length < 3]);

  const addCheckedLabel = (label: string) => {
    setCheckedLabels(prev => [...prev, label]);
  };
  const removeCheckedLabel = (label: string) => {
    setCheckedLabels(prev => prev.filter(item => item !== label));
  };

  const handlePressKeyword = (labelShort: KeywordShort) => {
    if (checkedLabels.includes(labelShort)) {
      removeCheckedLabel(labelShort);
      profileKeywordMap[labelShort].forEach(keyword => removeKeyword(keyword));
    } else {
      addCheckedLabel(labelShort);
      profileKeywordMap[labelShort].forEach(keyword => addKeyword(keyword));
    }
  };

  const {mutate, isLoading} = useMutation(createProfile, {
    onSuccess: profile => {
      queryClient.setQueryData(['myProfile'], profile);
    },
    onError: err => showToast({type: 'error', message: getErrorMessage(err)}),
  });

  const handlePressSubmit = async () => {
    if (!brithDate || !gender || !nickname) return;
    mutate({
      brithDate: getFormatDate(brithDate),
      gender,
      keywords,
      nickname,
    });
  };

  return (
    <View className="flex-1">
      <GuideText
        title={'당신을 설명하는 키워드를 선택해주세요.'}
        description="최소 3개 이상의 키워드를 선택해주세요:)"
        padding="b"
      />
      <FlexView gapSize="large" className="flex-1">
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            rowGap: 16,
            columnGap: 8,
          }}>
          {keywordLabels.map((label, idx) => (
            <KeywordBtn
              label={label}
              onPress={() => handlePressKeyword(keywordShorts[idx])}
              isChecked={checkedLabels.includes(keywordShorts[idx])}
              key={label}
            />
          ))}
        </View>
        <Btn
          label="시작하기"
          onPress={handlePressSubmit}
          disabled={disabled || isLoading}
        />
      </FlexView>
    </View>
  );
}

export default KeywordsForm;

const keywordLabels = [
  '📷 사진 찍는 걸 좋아해요',
  '🍃 잔잔한 분위기를 좋아해요',
  '🏃🏻‍♀️운동을 좋아해요',
  '🙋‍♂️ 새로운 경험을 즐겨요',
  '🎧 음악을 좋아해요',
  '🪑 인테리어에 관심있어요',
  '😎 트렌드에 민감해요',
  '🛍️ 패션에 관심이 많아요',
  '🍴미식을 즐겨요',
  '🌳 자연을 사랑해요',
  '🎨 예술작품에 관심있어요',
  '💕 낭만을 알아요',
  '🎢 짜릿한 스릴을 즐겨요',
];

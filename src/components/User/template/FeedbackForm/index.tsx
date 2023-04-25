import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import {createFeedback} from 'apis/system';
import AppText from 'components/@base/AppText';
import Btn from 'components/@base/Btn';
import FlexView from 'components/@base/FlexView';
import FeedbackInput from 'components/User/module/FeedbackInput';
import React, {useState} from 'react';
import useDialogStore from 'stores/useDialogStore';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const {openDialog, closeDialog, setConfig} = useDialogStore();
  const {goBack} = useNavigation();

  const {mutate, isLoading} = useMutation(createFeedback, {
    onMutate: () => {
      setConfig({
        title: '피드백 감사합니다.',
        description: '더 좋은 서비스를 제공하는 ohdy가 되겠습니다.',
        confirmLabel: '닫기',
        onConfirm: () => {
          closeDialog();
          goBack();
        },
      });
      openDialog();
    },
  });

  const handlePressComplete = () => {
    if (!feedback) return;
    mutate(feedback);
  };

  return (
    <FlexView gapSize="large" className="px-4 py-8">
      <FlexView gapSize="tiny">
        <AppText typoStyle="Action">ohdy를 사용하면서</AppText>
        <AppText typoStyle="Action">
          좋았던 점이나 불편했던 점을 알려 주세요.
        </AppText>
        <AppText typoStyle="Action">
          여러분의 소중한 피드백을 기다립니다.
        </AppText>
      </FlexView>
      <FeedbackInput value={feedback} onChange={setFeedback} />
      <Btn
        label="피드백 남기기"
        onPress={handlePressComplete}
        disabled={isLoading}
      />
    </FlexView>
  );
}

export default FeedbackForm;

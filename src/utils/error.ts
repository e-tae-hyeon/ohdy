import {isAxiosError} from 'axios';

const errorMessageMap: Record<number, string> = {
  0: '알 수 없는 오류가 발생했어요.\n잠시 후 다시 시도해주세요.',
  1: '존재하지 않는 데이터입니다.',
  2: '인증코드가 틀렸습니다.\n올바른 인증코드를 입력해주세요.',
  3: '인증코드가 만료되었습니다.\n다시 시도해주세요.',
  4: '잘못된 요청입니다.',
  7: '이미 존재하는 닉네임입니다.\n다른 닉네임을 사용해주세요.',
};

export function getErrorMessage(err: any) {
  if (isAxiosError(err)) {
    const errorCode = err.response?.data.code ?? 0;
    const errorMessage = errorMessageMap[errorCode] ?? errorMessageMap[0];

    return errorMessage;
  }

  return errorMessageMap[0];
}

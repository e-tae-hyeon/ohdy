import FlexContainer from 'components/@base/FlexContainer';
import LoginBtn, {LoginBtnIcon} from 'components/Auth/module/LoginBtn';
import useLogin from 'hooks/useLogin';
import React from 'react';
import {View} from 'react-native';

function LoginBtns() {
  const {startEmailLogin} = useLogin();

  return (
    <View className="p-12">
      <FlexContainer>
        <LoginBtn {...loginsMap.Apple} />
        <LoginBtn {...loginsMap.Kakao} />
        <LoginBtn {...loginsMap.Email} onPress={startEmailLogin} />
      </FlexContainer>
    </View>
  );
}

export default LoginBtns;

type LoginProvider = 'Apple' | 'Kakao' | 'Email';

const loginsMap: Record<
  LoginProvider,
  {
    icon: LoginBtnIcon;
    label: string;
    colors: {bgColor: string; accentColor: string};
  }
> = {
  Apple: {
    icon: 'apple',
    label: 'Apple로 계속하기',
    colors: {
      bgColor: '#222',
      accentColor: '#fff',
    },
  },
  Kakao: {
    icon: 'kakao',
    label: 'Kakao로 계속하기',
    colors: {
      bgColor: '#FAE100',
      accentColor: '#191919',
    },
  },
  Email: {
    icon: 'mail',
    label: '이메일로 계속하기',
    colors: {
      bgColor: '#E0E0E0',
      accentColor: '#222',
    },
  },
};

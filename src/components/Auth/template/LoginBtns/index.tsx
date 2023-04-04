import {useNavigation} from '@react-navigation/native';
import {SocialProvider} from 'apis/types';
import FlexView from 'components/@base/FlexView';
import LoginBtn, {LoginBtnIcon} from 'components/Auth/module/LoginBtn';
import {AuthGroupNavigationProp} from 'navigations/RootStack/types';
import React from 'react';
import {View} from 'react-native';
import useAuthStore from 'stores/useAuthStore';

function LoginBtns() {
  const {navigate} = useNavigation<AuthGroupNavigationProp>();
  const {setRegisterType} = useAuthStore();

  const handlePressEmail = () => {
    setRegisterType('local');
    navigate('Email');
  };

  return (
    <View className="p-12">
      <FlexView>
        <LoginBtn {...loginsMap.Apple} />
        <LoginBtn {...loginsMap.Kakao} />
        <LoginBtn {...loginsMap.Email} onPress={handlePressEmail} />
      </FlexView>
    </View>
  );
}

export default LoginBtns;

type LoginProvider = SocialProvider | 'Email';

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

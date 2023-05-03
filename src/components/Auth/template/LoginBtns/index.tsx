import {login as loginByKakao} from '@react-native-seoul/kakao-login';
import {useNavigation} from '@react-navigation/native';
import {authByKakao} from 'apis/auth';
import {SocialProvider} from 'apis/types';
import FlexView from 'components/@base/FlexView';
import LoginBtn, {LoginBtnIcon} from 'components/Auth/module/LoginBtn';
import useLogin from 'hooks/useLogin';
import {AuthGroupNavigationProp} from 'navigations/RootStack/types';
import React from 'react';
import {View} from 'react-native';
import useAuthStore from 'stores/useAuthStore';

function LoginBtns() {
  const {navigate} = useNavigation<AuthGroupNavigationProp>();
  const login = useLogin();
  const {
    setRegisterType,
    setSocialRegisterData,
    setSocialUserData,
    openPolicySheet,
  } = useAuthStore();

  const handlePressEmail = () => {
    setRegisterType('local');
    navigate('Email');
  };

  const handlePressKakao = async () => {
    try {
      const auth = await loginByKakao();
      const authResult = await authByKakao(auth.accessToken);

      switch (authResult.type) {
        case 'login': {
          await login(authResult.data);
          break;
        }
        case 'register': {
          setRegisterType('social');
          setSocialRegisterData({
            provider: 'kakao',
            socialId: authResult.data.id.toString(),
          });
          setSocialUserData(authResult.data);
          openPolicySheet();
          break;
        }
      }
    } catch (err) {}
  };

  return (
    <View className="p-12">
      <FlexView>
        <LoginBtn {...loginsMap.apple} />
        <LoginBtn {...loginsMap.kakao} onPress={handlePressKakao} />
        <LoginBtn {...loginsMap.email} onPress={handlePressEmail} />
      </FlexView>
    </View>
  );
}

export default LoginBtns;

type LoginProvider = SocialProvider | 'email';

const loginsMap: Record<
  LoginProvider,
  {
    icon: LoginBtnIcon;
    label: string;
    colors: {bgColor: string; accentColor: string};
  }
> = {
  apple: {
    icon: 'apple',
    label: 'Apple로 계속하기',
    colors: {
      bgColor: '#222',
      accentColor: '#fff',
    },
  },
  kakao: {
    icon: 'kakao',
    label: 'Kakao로 계속하기',
    colors: {
      bgColor: '#FAE100',
      accentColor: '#191919',
    },
  },
  email: {
    icon: 'mail',
    label: '이메일로 계속하기',
    colors: {
      bgColor: '#E0E0E0',
      accentColor: '#222',
    },
  },
};

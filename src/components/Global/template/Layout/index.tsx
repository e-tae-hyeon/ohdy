import ActionsHeader from 'components/Global/module/ActionsHeader';
import Header from 'components/Global/module/Header';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type LayoutProps = {
  headerShown?: boolean;
  headerHasBack?: boolean;
  headerTitle?: string;
  headerRight?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

function Layout({
  headerShown = true,
  headerHasBack = false,
  headerTitle = '',
  headerRight,
  className,
  children,
}: LayoutProps) {
  return (
    <SafeAreaView className="flex flex-1 bg-white">
      {headerShown &&
        Headers[headerHasBack ? 'leftBack' : 'leftTitle'].render(
          headerTitle,
          headerRight,
        )}
      <View className={`flex-1 p-4 ${className}`}>{children}</View>
    </SafeAreaView>
  );
}

export default Layout;

const Headers = {
  leftTitle: {
    render: (title: string, right?: React.ReactNode) => (
      <Header title={title} right={right} />
    ),
  },
  leftBack: {
    render: (title: string, right?: React.ReactNode) => (
      <ActionsHeader title={title} right={right} />
    ),
  },
};

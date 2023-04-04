import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({children}: LayoutProps) {
  return (
    <SafeAreaView className="flex flex-1 bg-white">{children}</SafeAreaView>
  );
}

export default Layout;

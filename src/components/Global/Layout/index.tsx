import React from 'react';
import {View} from 'react-native';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({children}: LayoutProps) {
  return <View className="flex flex-1 bg-white">{children}</View>;
}

export default Layout;

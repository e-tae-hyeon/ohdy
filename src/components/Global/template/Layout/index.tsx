import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type LayoutProps = {
  header?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

function Layout({header, className, children}: LayoutProps) {
  return (
    <SafeAreaView className="flex flex-1 bg-white">
      {header}
      <View className={`flex-1 p-4 ${className}`}>{children}</View>
    </SafeAreaView>
  );
}

export default Layout;

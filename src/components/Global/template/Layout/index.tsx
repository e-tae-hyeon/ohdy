import React from 'react';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';

type LayoutProps = {
  edges?: Edge[];
  children: React.ReactNode;
};

function Layout({edges, children}: LayoutProps) {
  return (
    <SafeAreaView edges={edges} className="flex flex-1 bg-white">
      {children}
    </SafeAreaView>
  );
}

export default Layout;

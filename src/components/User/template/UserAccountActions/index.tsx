import {unregister} from 'apis/auth';
import ActionCell from 'components/User/module/ActionCell';
import useLogout from 'hooks/useLogout';
import React from 'react';
import {View} from 'react-native';
import useDialogStore from 'stores/useDialogStore';

function UserAccountActions() {
  const logout = useLogout();
  const {openDialog, closeDialog, setConfig} = useDialogStore();

  const handlePressLogout = () => {
    setConfig({
      title: '로그아웃',
      description: '정말 로그아웃 하실건가요?',
      confirmLabel: '로그아웃',
      onCancel: closeDialog,
      onConfirm: () => {
        logout();
        closeDialog();
      },
    });
    openDialog();
  };

  const handlePressUnregister = () => {
    setConfig({
      title: '회원탈퇴',
      description: '정말 회원탈퇴 하실건가요?',
      confirmLabel: '회원탈퇴',
      onCancel: closeDialog,
      onConfirm: async () => {
        await unregister();
        closeDialog();
        logout();
      },
    });
    openDialog();
  };

  return (
    <View>
      <ActionCell label="로그아웃" onPress={handlePressLogout} />
      <ActionCell label="회원탈퇴" onPress={handlePressUnregister} />
    </View>
  );
}

export default UserAccountActions;

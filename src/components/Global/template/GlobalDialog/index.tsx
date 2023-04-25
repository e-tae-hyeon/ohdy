import Dialog from 'components/@base/Dialog';
import React from 'react';
import useDialogStore from 'stores/useDialogStore';

function GlobalDialog() {
  const {isVisible, config} = useDialogStore();

  if (!config) return null;

  return <Dialog isVisible={isVisible} {...config} />;
}

export default GlobalDialog;

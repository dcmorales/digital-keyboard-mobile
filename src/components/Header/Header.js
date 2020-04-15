import React from 'react';
import { Header as HeaderElement } from 'react-native-elements';

import SettingsModal from './SettingsModal';

export default function Header() {
  return (
    <HeaderElement
      centerComponent={{ text: 'Digital Keyboard', style: { color: '#fff' } }}
      rightComponent={<SettingsModal />}
    />
  );
}

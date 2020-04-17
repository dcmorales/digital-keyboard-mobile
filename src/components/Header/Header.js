import React from 'react';
import { StyleSheet } from 'react-native';
import { Header as HeaderElement } from 'react-native-elements';

import SettingsModal from './SettingsModal';

export default function Header() {
  const { headerContainer, title } = styles;

  return (
    <HeaderElement
      centerComponent={{ text: 'Digital Keyboard', style: title }}
      rightComponent={<SettingsModal />}
      containerStyle={headerContainer}
    />
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    padding: 35,
    backgroundColor: '#0059b2',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    borderBottomWidth: 3,
    borderColor: '#3399ff',
    paddingHorizontal: 15,
  },
});
